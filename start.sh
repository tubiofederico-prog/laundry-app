#!/bin/bash
cd /Users/federicotubio/laundry-app
python3 -m http.server 3000 --directory . &
sleep 1
open http://localhost:3000
