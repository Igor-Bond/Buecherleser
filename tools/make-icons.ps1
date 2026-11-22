# Генерация иконок приложения из того же рисунка, что и icon.svg: строки текста и лупа с буквой ß.
#
# Запуск: powershell -ExecutionPolicy Bypass -File tools/make-icons.ps1
#
# Android ставит приложение на главный экран только с PNG-иконками 192 и 512 точек.
# У maskable-иконок фон занимает весь холст, а рисунок ужат в «безопасную зону»,
# которую система не обрежет ни кругом, ни каплей.

param(
    [string]$Out = (Join-Path (Split-Path -Parent $PSScriptRoot) 'assets')
)

Add-Type -AssemblyName System.Drawing

$paper  = [System.Drawing.ColorTranslator]::FromHtml('#f4ecd8')
$ink    = [System.Drawing.ColorTranslator]::FromHtml('#3d3223')
$accent = [System.Drawing.ColorTranslator]::FromHtml('#b4541a')

function New-Icon {
    param([int]$Size, [switch]$Maskable)

    $bmp = New-Object System.Drawing.Bitmap($Size, $Size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias

    $bg = New-Object System.Drawing.SolidBrush($paper)
    if ($Maskable) {
        $g.FillRectangle($bg, 0, 0, $Size, $Size)
    } else {
        $r = $Size * 0.1875 * 2
        $path = New-Object System.Drawing.Drawing2D.GraphicsPath
        $path.AddArc(0, 0, $r, $r, 180, 90)
        $path.AddArc($Size - $r, 0, $r, $r, 270, 90)
        $path.AddArc($Size - $r, $Size - $r, $r, $r, 0, 90)
        $path.AddArc(0, $Size - $r, $r, $r, 90, 90)
        $path.CloseFigure()
        $g.FillPath($bg, $path)
        $path.Dispose()
    }

    # Рисунок задан в координатах 512x512, как в icon.svg; для maskable он ужимается к центру
    $k = if ($Maskable) { 0.72 } else { 1.0 }
    $s = $Size / 512 * $k
    $o = $Size * (1 - $k) / 2
    $g.TranslateTransform([float]$o, [float]$o)
    $g.ScaleTransform([float]$s, [float]$s)

    $pen = New-Object System.Drawing.Pen($ink, 22)
    $pen.StartCap = 'Round'; $pen.EndCap = 'Round'
    $g.DrawLine($pen, 112, 150, 282, 150)
    $g.DrawLine($pen, 112, 214, 222, 214)
    $g.DrawLine($pen, 112, 278, 202, 278)
    $g.DrawLine($pen, 112, 342, 262, 342)
    $pen.Dispose()

    $handle = New-Object System.Drawing.Pen($accent, 36)
    $handle.StartCap = 'Round'; $handle.EndCap = 'Round'
    $g.DrawLine($handle, 386, 338, 448, 402)
    $handle.Dispose()

    $g.FillEllipse($bg, 226, 176, 184, 184)
    $ring = New-Object System.Drawing.Pen($accent, 28)
    $g.DrawEllipse($ring, 226, 176, 184, 184)
    $ring.Dispose()

    $font = New-Object System.Drawing.Font('Georgia', 104, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
    $fmt = New-Object System.Drawing.StringFormat
    $fmt.Alignment = 'Center'; $fmt.LineAlignment = 'Center'
    $inkBrush = New-Object System.Drawing.SolidBrush($ink)
    $g.DrawString([string][char]0x00DF, $font, $inkBrush, 318, 272, $fmt)
    $font.Dispose(); $inkBrush.Dispose(); $bg.Dispose(); $g.Dispose()

    return $bmp
}

if (-not (Test-Path $Out)) { New-Item -ItemType Directory -Path $Out | Out-Null }

$plan = @(
    @{ Size = 192; Maskable = $false; Name = 'icon-192.png' },
    @{ Size = 512; Maskable = $false; Name = 'icon-512.png' },
    @{ Size = 192; Maskable = $true;  Name = 'icon-maskable-192.png' },
    @{ Size = 512; Maskable = $true;  Name = 'icon-maskable-512.png' },
    @{ Size = 180; Maskable = $true;  Name = 'apple-touch-icon.png' }
)

foreach ($item in $plan) {
    $bmp = if ($item.Maskable) { New-Icon -Size $item.Size -Maskable } else { New-Icon -Size $item.Size }
    $bmp.Save((Join-Path $Out $item.Name), [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "$($item.Name) - $($item.Size)x$($item.Size)"
}
