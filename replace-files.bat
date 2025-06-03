@echo off
echo Replacing component files with simplified versions...
cd "c:\Users\youss\IdeaProjects\my-portfolio"
copy /Y "src\components\Experience.tsx.new" "src\components\Experience.tsx"
copy /Y "src\components\Footer.tsx.new" "src\components\Footer.tsx"
copy /Y "src\components\PortfolioFeed.tsx.new" "src\components\PortfolioFeed.tsx"
echo Done.
pause
