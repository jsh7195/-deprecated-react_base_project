#!/bin/sh
# pm2 사용 - 스크립트 파일 사용안함
APP_NAME="open_mall_front_md"
APP_DESC="[open_mall_front_md]"

# Process Check
sh /svc/openmall/md/app/front/open_mall_front_md/stopOpenMall_MD.sh
sleep 3
APP_PID=`ps -ef | grep ${APP_NAME} | grep -v vi | grep -v grep | awk '{print $2}'`

if [ -n "$APP_PID" ]
        # Process Already Exist.
        then
                echo "======================================================="
                echo " *  Already Running! $APP_DESC - PID : "$APP_PID
                echo "======================================================="
                exit 1
        # Process Not Exist.
        else

                cd /svc/openmall/md/app/front/open_mall_front_md
                if [ $NODE_ENV == "dev" ]
                         then
                             npm run dev
                elif [ $NODE_ENV == "prod" ]
                         then
                             npm run prod
                fi

                echo "---------------[$NODE_ENV SERVER]-------------------"
                echo " *  Process Running! "$APP_DESC
fi