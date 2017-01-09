FROM kohkimakimoto/nightmare

copy screenshot.js screenshot.js
copy entrypoint.sh /entrypoint.sh

cmd ["screenshot"]