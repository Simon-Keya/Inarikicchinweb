$ErrorActionPreference = "Stop"

Write-Host "`nINARI KICCHIN — Claude Code skill setup" -ForegroundColor Cyan
Write-Host "Installing only the three skills most relevant to this website." -ForegroundColor Gray

if (-not (Get-Command claude -ErrorAction SilentlyContinue)) {
    throw "Claude Code CLI was not found. Install Claude Code first, then rerun this script."
}
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    throw "Node.js was not found. Install Node.js 22 or newer, then rerun this script."
}

$nodeVersion = (& node --version).Trim().TrimStart("v")
$major = [int]($nodeVersion.Split('.')[0])
if ($major -lt 22) {
    throw "Taste Skill requires Node.js 22+. Detected Node.js $nodeVersion."
}

Write-Host "`n[1/3] Superpowers — planning, implementation discipline, testing and review" -ForegroundColor Yellow
claude plugin install superpowers@claude-plugins-official

Write-Host "`n[2/3] Taste Skill — art direction and browser-based visual review" -ForegroundColor Yellow
npx --yes skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend" -a claude

Write-Host "`n[3/3] UI UX Pro Max — design-system and interface guidance" -ForegroundColor Yellow
npx --yes ui-ux-pro-max-cli init --ai claude

Write-Host "`nSetup commands completed. Restart Claude Code and verify the skills are available." -ForegroundColor Green
Write-Host "Review skill source, permissions and scripts before approving unexpected commands or external services." -ForegroundColor Gray
