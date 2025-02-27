#!/bin/sh

. ./scripts/load_python_env.sh

echo ""
echo "Starting backend"
echo ""
pwd
ls
./.venv/bin/python app/backend/app_api.py -b 127.0.0.1:8000
if [ $? -ne 0 ]; then
    echo "Failed to start backend"
    exit $?
fi
