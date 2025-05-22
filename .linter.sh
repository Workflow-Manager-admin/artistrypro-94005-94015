#!/bin/bash
cd /home/kavia/workspace/code-generation/artistrypro-94005-94015/main_container_for_artistrypro
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

