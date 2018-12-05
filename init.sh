# OrangeAbacus Init Script
# This will install the required packages to run the OrAb app

echo "Initializing OrAb (OrangeAbacus)"
echo "Intalling npm packages"
npm install
echo "Initializing SQLlite database"
cd db
node seed_db.js
