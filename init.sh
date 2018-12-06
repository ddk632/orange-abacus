# OrangeAbacus Init Script
# This will install the required packages to run the OrAb app

echo "Initializing OrAb (OrangeAbacus)"
echo "Windows User: Please ensure to download and install MS Build Tools v140 from:"
echo "https://www.microsoft.com/en-us/download/details.aspx?id=48159"
echo "prior to continuing."
read -n 1 -s -r -p "Press any key to continue"
echo 
echo "Intalling npm packages"
npm install --build-from-source --save sqlite3
npm install
echo "Initializing SQLlite database"
cd db
touch OrAb.sqlite
node seed_db.js
