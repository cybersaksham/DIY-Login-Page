# DIY Login Page

This project is made by react js framework. This is a login page with backend in mongodb.

## Development server

### Linux
<li>Installing node js & nodemon</li>

```cmd
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.3/install.sh | bash
nvm install node
npm install -g nodemon
```

<li>Installing mongodb</li>

```cmd
sudo apt-get install gnupg
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

<li>Downloading project code & running server</li>

```cmd
git clone https://github.com/cybersaksham/DIY-Login-Page
cd DIY-Login-Page
npm --prefix ./backend install
npm --prefix ./frontend install
npm install
sudo service mongod start
npm run both
```

<li>Uninstalling Code</li>

First stop server by ctrl+C.

```cmd
sudo service mongod stop
cd ..
rm -rf DIY-Login-Page
```

### Windows
<p>Install node js from https://nodejs.org/en/</p>
<p>Install mongodb from https://www.mongodb.com/try/download/community</p>

<li>Installing nodemon</li>

```cmd
npm install -g nodemon
```

<li>Downloading project code & running server</li>

```cmd
git clone https://github.com/cybersaksham/DIY-Login-Page
cd DIY-Login-Page
npm --prefix ./backend install
npm --prefix ./frontend install
npm install
npm run both
```

<li>Uninstalling Code</li>

First stop server by ctrl+C.

```cmd
cd ..
rmdir /S DIY-Login-Page
```

## Note
You can download mongodb compass to visualize your database from https://www.mongodb.com/try/download/compass
