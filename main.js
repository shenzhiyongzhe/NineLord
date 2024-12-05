
const { RewriteConfig, Sleep, specialConfig, LaunchGame, ReadConfig, } = require("./utils.js");
const { ExceptionFlow } = require("./Exception");
const { MainStoryFlow } = require("./MainStory.js");

const { InstanceFlow } = require("./Instance.js");

const version = `${app.versionName}`
// console.log("version：" + app.versionName)
const versionColor = "#7FFFD4";
let mainThread = null;
let serverName = null;

const GetCaptureScreenPermission = () =>
{
    threads.start(function ()
    {
        auto();
        images.requestScreenCapture(true);
    });

    threads.start(function ()
    {
        let hasOpen = textMatches(/(.*시작하기.*|.*立即开始.*)/).findOne(10000);
        if (hasOpen)
        {
            hasOpen.click();
        }
    });
};

// const StopScript = () => java.lang.System.exit(0);
const StopScript = () => engines.stopAllAndToast();


const DownLoadApk = (downloadUrl, savePath) =>
{
    threads.start(function ()
    {
        const url = `http://10.6.130.129:82/${downloadUrl}`;
        const fullSavePath = `/sdcard/${savePath}`;

        let r = http.client().newCall(
            http.buildRequest(url, {
                method: "GET",
            })
        ).execute();

        let fs = new java.io.FileOutputStream(fullSavePath);

        let is = r.body().byteStream();
        const buffer = util.java.array("byte", 1024);
        let byteRead; //每次读取的byte数
        while ((byteRead = is.read(buffer)) != -1)
        {
            fs.write(buffer, 0, byteRead); //读取
        }
        if (files.exists(fullSavePath))
        {
            app.viewFile(fullSavePath);
        }
        else
        {
            alert('下载失败');
        }
    }
    );
};
const AutoInstallApk = (url) =>
{
    if (files.exists(`/sdcard/${url}`))
    {
        app.viewFile(`/sdcard/${url}`);

        //     let hasUpdate = textMatches(/(.*업데이트.*|.*更新.*)/).findOne(5000);
        //     if (hasUpdate)
        //     {
        //         hasUpdate.click();
        //         // sleep(2000);
        //     }

        //     let hasOpen = textMatches(/(.*열기.*|.*打开.*)/).findOne(15000);
        //     if (hasOpen)
        //     {
        //         console.log("open");
        //         hasOpen.click();
        //     }
    }
};
const UpdateScript = () => DownLoadApk("LordNine.apk", "LordNine/LordNine.apk");
const DownloadAutoJs = () => DownLoadApk("AutoJs.apk", "AutoJs.apk");
const ChangeVPNSetting = () =>
{
    app.launch("fun.kitsunebi.kitsunebi4android");

    let disallowListConfig = {
        "autoJs": false,
        "lordnine": false,
    };
    threads.start(function ()
    {
        for (let i = 0; i < 10; i++)
        {
            let hasRefreshBtn_0 = desc("Measure Latency").findOne(20);
            if (hasRefreshBtn_0)
            {
                let add_btn = id("add_btn").findOne(20);
                if (add_btn)
                {
                    add_btn.click();
                }
            }
            let has_AddEndpointGroup = text("Add Endpoint Group").findOne(20);
            if (has_AddEndpointGroup)
            {
                let settings = text("Settings").findOne(20);
                if (settings)
                {
                    click(settings.bounds().centerX(), settings.bounds().centerY());
                }
            }

            let per_app_vpn = text("Configure Per-App VPN.").findOne(20);
            if (per_app_vpn)
            {
                if (text("Settings").findOne(20))
                {
                    click(per_app_vpn.bounds().centerX(), per_app_vpn.bounds().centerY());
                }
            }
            let enabled_per_app_vpn = text("Enable Per-App VPN").findOne(20);
            if (enabled_per_app_vpn)
            {
                let enabled_per_app_vpn_switch = enabled_per_app_vpn.parent().parent().children()[1].children()[0];
                let isOpen = enabled_per_app_vpn_switch.checked();
                console.log("分应用代理是否打开：" + isOpen);
                if (!isOpen)
                {

                    console.log("点击打开: " + enabled_per_app_vpn.parent().parent().click());
                }
            }
            let current_list = textMatches(/(.*You may either use the allowed list.*)/).findOne(20);
            if (current_list)
            {
                let hasAllowedList = textMatches(/(.*current Allowed List.*)/).findOne(20);
                if (hasAllowedList)
                {
                    console.log("当前是允许列表，需要改动");
                    click(hasAllowedList.bounds().centerX(), hasAllowedList.bounds().centerY());

                    let has_per_app_mode = id("alertTitle").findOne(1000);
                    if (has_per_app_mode)
                    {
                        let hasMode_disallowedList = text("Disallowed List").findOne(1000);
                        if (hasMode_disallowedList)
                        {
                            hasMode_disallowedList.click();
                        }
                    }
                    let DisallowedList = text("Selected apps are disallowed to use the VPN tunnel, others will be allowed.").findOne(2000);
                    if (DisallowedList)
                    {
                        click(DisallowedList.bounds().centerX(), DisallowedList.bounds().centerY());
                    }
                }
                let hasDisallowedList = textMatches(/(.*current Disallowed List.*)/).findOne(20);
                if (hasDisallowedList)
                {
                    console.log("当前已经是不允许列表，不需要改动");
                }
            }
            let select_disallowedList = textMatches(/(.*Selected apps are disallowed.*)/).findOne(20);
            if (select_disallowedList)
            {
                click(select_disallowedList.bounds().centerX(), select_disallowedList.bounds().centerY());
            }
            //确保当前页面为不允许列表
            if (desc("위로 이동").findOne(20) && text("Disallowed List").findOne(20) && id("add_btn").findOne(20))
            {
                let lordnine = text("com.lordnine").findOne(20);
                if (lordnine)
                {
                    let is_lordnine_on = lordnine.parent().children()[3];
                    if (is_lordnine_on.checked() == true)
                    {
                        console.log("已经打开，不需要操作");
                        disallowListConfig.lordnine = true;
                    }
                    else if (is_lordnine_on.checked() == false)
                    {
                        console.log("autoJs 未打开不允许列表，点击打开");
                        lordnine.parent().click();
                    }
                    let autoJs = text("org.autojs.autoxjs.v6").findOne(20);
                    if (autoJs)
                    {
                        let is_autoJs_on = autoJs.parent().children()[3];
                        if (is_autoJs_on.checked() == true)
                        {
                            console.log("已经打开，不需要操作");
                            disallowListConfig.autoJs = true;
                        }
                        else if (is_autoJs_on.checked() == false)
                        {
                            console.log("autoJs 未打开不允许列表，点击打开");
                            autoJs.parent().click();
                        }
                    }
                    else
                    {
                        console.log("没有发现auto js 默认跳过");
                        disallowListConfig.autoJs = true;
                    }
                }
                else
                {
                    console.log("滚动当前页面");
                    scrollForward();
                }
                if (disallowListConfig.lordnine == true && disallowListConfig.autoJs == true)
                {
                    console.log("已设置完毕，返回到主页面");
                    break;
                }
            }

            Sleep(1);
        }

        for (let i = 0; i < 10; i++)
        {
            let backBtn = desc("위로 이동").findOne(20);
            if (backBtn)
            {
                backBtn.click();
            }
            let refreshBtn = desc("Measure Latency").findOne(20);
            if (refreshBtn)
            {
                refreshBtn.click();
                break;
            }
            Sleep(0.5);
        }
    });

    console.log("设置完毕");
};

const config = ReadConfig();
if (!config.gameMode)
{
    config.gameMode = "mainStory";
    RewriteConfig(config);
}
let gameMode = config.gameMode;

const uiFloaty = () =>
{
    const floatyWindow = floaty.window(
        <card gravity="center|top" alpha="1" cardBackgroundColor="#71c9ce" cardCornerRadius="10">
            <vertical gravity="center|top">
                <button id="start" h="40" w="120" color="#ffffff" bg="#a6e3e9" marginTop="15" >开始</button>
                <text id="delayTime" h='0' gravity="center" color="#ffffff" textSize="40sp"></text>
                <text id="more" textSize="20" h="25" gravity="center" marginTop="5">✡</text>
            </vertical>
            <vertical id="more_container" gravity="center|bottom" h="0">
                <button id="update" color="#ffffff" w="120" h="40" bg="#a6e3e9">更新</button>
                <button id="stop" color="#ffffff" w="120" h="40" marginTop="15" bg="#a6e3e9">停止</button>
                <radiogroup orientation="horizontal" gravity="center" color="#ffffff">
                    <radio id="mainStory" text="主线" textSize="10" checked="{{gameMode == 'mainStory' ? true : false}}" />
                    <radio id="instance" text="挂机" textSize="10" checked="{{gameMode == 'instance' ? true : false}}" />
                </radiogroup>
                <linear orientation="horizontal" gravity="center">
                    <text id="createCharacter" w="60" textSize="8" color="#ffffff" >创建角色</text>
                    <text textSize="10" textStyle="italic" color={versionColor}>版本：{version}</text>
                </linear>
                <linear orientation="horizontal" gravity="center" >
                    <text id="downloadAutoJs" textSize="10">下载autojs</text>

                </linear>
            </vertical>
        </card>
    );

    floatyWindow.setSize(400, 270);
    floatyWindow.setPosition(185, 300);

    const uiInterval = setInterval(() => {}, 1000);



    if (!config.delayTime)
    {
        config.delayTime = random(3, 1000);
        RewriteConfig(config);
    }
    specialConfig.gameMode = config.gameMode;
    specialConfig.initGameMode = config.gameMode;

    floatyWindow.createCharacter.click(() =>
    {
        dialogs.input("请输入区服编号", "999", (name) =>
        {
            console.log("serverName:" + name);
            serverName = name;
        });
    });

    floatyWindow.start.click(() =>
    {
        delayTime = config.delayTime;
        let count = delayTime;
        floatyWindow.delayTime.attr("h", 100);
        floatyWindow.start.attr("h", 0);
        floatyWindow.delayTime.setText(`${count}s`);
        const delayInterval = setInterval(() =>
        {
            ui.run(() =>
            {
                floatyWindow.delayTime.setText(`${count}s`);
            });
            console.log("delayTime:" + count);
            count--;
            if (count <= 0)
            {
                clearInterval(delayInterval);
            }
        }, 1000);

        GetCaptureScreenPermission();

        setTimeout(() =>
        {
            console.log("《《《 游戏开始 》》》");
            console.log("游戏模式为：" + specialConfig.gameMode);
            mainThread = threads.start(MainFlow);

            clearInterval(uiInterval);

            floatyWindow.close();
        }, (delayTime + 1) * 1000);
    });

    floatyWindow.more.click(() =>
    {
        floatyWindow.setSize(400, 520);
        floatyWindow.more_container.attr("h", 230);
        floatyWindow.more.attr("h", 0);
    });

    floatyWindow.update.click(UpdateScript);
    floatyWindow.stop.click(StopScript);
    floatyWindow.mainStory.click(() =>
    {
        gameMode = "mainStory";
        config.gameMode = "mainStory";
        RewriteConfig(config);

    });
    floatyWindow.instance.click(() =>
    {
        gameMode = "instance";
        config.gameMode = "instance";
        RewriteConfig(config);

    });
    floatyWindow.downloadAutoJs.click(DownloadAutoJs);

};
console.setGlobalLogConfig({
    "file": "/sdcard/LordNine/log.log",
    "filePattern": "%d{dd日}%m%n"
});

const stateFloaty = () =>
{
    const floaty_window = floaty.window(
        <frame gravity="center" id="switch" w="18" h="18" >
            <text color="#ffffff">🎯</text>
        </frame>
    );
    floaty_window.setPosition(0, 682);
    floaty_window.switch.click(() => threads.shutDownAll());
};

const Update = () =>
{
    while (true)
    {
        ExceptionFlow();

        if (specialConfig.gameMode == "mainStory")
        {
            MainStoryFlow();
        }
        else if (specialConfig.gameMode == "instance")
        {
            InstanceFlow();
        }
        if (specialConfig.gameMode != specialConfig.initGameMode)
        {
            if (Math.abs(specialConfig.lastModeChangeTime.getTime() - new Date().getTime()) / (3600 * 1000) >= 5)
            {
                console.log("--- game mode changed ----");
                console.log("game mode changed over 5 hours");
                console.log("back to main story");
                specialConfig.gameMode = "mainStory";
            }
        }
        sleep(100);
    }
};
const FormatConfig = () =>
{
    console.log("格式化配置")
    const config = ReadConfig()
    const formattedConfig = {
        game: {},
        daily: {}
    }
    try
    {
        formattedConfig.gameMode = config.gameMode;
        formattedConfig.delayTime = config.deathTime;
        formattedConfig.unlockTrade = config.unlockTrade ? config.unlockTrade : false;
        formattedConfig.accountSuspended = config.accountSuspended ? config.accountSuspended : false;

        formattedConfig.game.today = config.game.today;
        formattedConfig.game.deathTime = config.game.deathTime;
        formattedConfig.game.reconnectionTime = config.game.reconnectionTime ? config.game.reconnectionTime : 0;
        formattedConfig.game.serverName = config.game.serverName ? config.game.serverName : "999";
        formattedConfig.game.name = config.game.name ? config.game.name : '';
        formattedConfig.game.lv = config.game.lv ? config.game.lv : false;
        formattedConfig.game.autoPotion = config.game.autoPotion ? config.game.autoPotion : false;
        formattedConfig.game.diamond = config.game.diamond ? config.game.diamond : 0;
        formattedConfig.game.monthlyIncome = config.game.monthlyIncome ? config.game.monthlyIncome : 0;
        formattedConfig.game.combatPower = config.game.combatPower ? config.game.combatPower : 0;
        formattedConfig.game.tradingTimes = config.game.tradingTimes ? config.game.tradingTimes : 0;
        formattedConfig.game.changeGameSetting = config.game.changeGameSetting ? config.game.changeGameSetting : false;
        formattedConfig.game.engraving_0 = config.game["engraving_0"] ? config.game["engraving_0"] : false;
        formattedConfig.game.engraving_1 = config.game["engraving_1"] ? config.game["engraving_1"] : false;

        formattedConfig.daily.dailyInstance = false;
        formattedConfig.daily.acceptDailyMission = false;
        formattedConfig.daily.hangUpSecretLab = false;

        formattedConfig.daily.guildDonation = false;
        formattedConfig.daily.dailyShop = false;
        formattedConfig.daily.friendshipDonation = false;
        formattedConfig.daily.friendshipShop = false;

        RewriteConfig(formattedConfig)
        console.log("配置格式化完成")
    } catch (error)
    {
        console.log("格式化失败")
        console.log(error)
    }

}
const MainFlow = () =>
{
    // FormatConfig()
    stateFloaty();

    LaunchGame();
    if (serverName != null)
    {
        console.log("开始导入创建角色模块");
        const { CreateCharacterFlow } = require("./CreateCharacter.js");
        CreateCharacterFlow(serverName);
    }
    Update();
};

uiFloaty()
// FormatConfig()

