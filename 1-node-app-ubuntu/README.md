    1  apt-get update
    2  apt-get install curl -y
    4  curl -sL https://deb.nodesource.com/setup_10.x | bash
    5  apt-get install nodejs -y
    6  ls
    7  cd opt/
    8  ls
    9  mkdir node-app
   10  cd node-app/
   11  echo "console.log('merhaba dunya')" > index.js
   12  ls
   13  node index.js
   14  history