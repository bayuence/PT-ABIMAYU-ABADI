$files = Get-ChildItem -Path "c:\Users\bayue\Desktop\PT\components" -Filter "*.tsx"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace 'bg-\[var\(--bg-primary\)\]', 'theme-bg-primary'
    $content = $content -replace 'bg-\[var\(--bg-secondary\)\]', 'theme-bg-secondary'
    $content = $content -replace 'bg-\[var\(--bg-card-solid\)\]', 'theme-bg-card'
    $content = $content -replace 'bg-\[var\(--bg-input\)\]', 'theme-bg-input'
    $content = $content -replace 'text-\[var\(--text-heading\)\]', 'theme-text-heading'
    $content = $content -replace 'text-\[var\(--text-body\)\]', 'theme-text-body'
    $content = $content -replace 'text-\[var\(--text-muted\)\]', 'theme-text-muted'
    $content = $content -replace 'text-\[var\(--text-accent\)\]', 'theme-text-accent'
    $content = $content -replace 'text-\[var\(--accent\)\]', 'theme-accent'
    $content = $content -replace 'text-\[var\(--gold\)\]', 'theme-gold'
    $content = $content -replace 'border-\[var\(--border-card\)\]', 'theme-border'
    $content = $content -replace 'border-\[var\(--border-subtle\)\]', 'theme-border-subtle'
    Set-Content $file.FullName -Value $content -NoNewline
    Write-Host "Updated: $($file.Name)"
}
