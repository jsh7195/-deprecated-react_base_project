#!/bin/sh
# pm2 사용 - 스크립트 파일 사용안함
APP_NAME="open_mall_front_md"
APP_DESC="[open_mall_front_md]"

# Process Check
APP_PID=`ps -ef | grep ${APP_NAME} | grep -v vi | grep -v grep | awk '{print $2}'`

if [ -n "$APP_PID" ]
        # Process Already Exist.
        then
                kill -9 $APP_PID
                echo "======================================================="
                echo " *  Process Stopped! $APP_DESC - PID : "$APP_PID
                echo "======================================================="
                exit 1
        # Process Not Exist.
        else
                echo "======================================================="
                echo " *  Already Stopped! No Process - "$APP_DESC
                #echo "======================================================="
fi