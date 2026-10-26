export const LangJa = {
    fallbackError: {
        line_1: "⚠️問題が発生しました⚠️",
        line_2: "このエラーが表示された場合、ＨＵＤに重大なエラーが発生しており、５秒後に再読み込みされます。",
        line_3: "ＨＵＤを外部からロードできる場合、問題はビューアが古いことに起因している可能性があります。",
        line_4: "ＨＵＤを外部からロードできない場合は、Discordでサポートチケットを提出してください。"
    },
    modules: {
        profile: "プロファイル",
        outfit: "アウトフィット",
        accessories: "アクセサリ",
        hair: "髪型",
        shoe: "靴",
        rlv: "ＲＬＶ",
        hudlets: "ＨＵＤレット",
        landmark: "ランドマーク",
        inventory: "インベントリ",
        ao: "ＡＯ",
        pantyRaid: "パンティレイド",
        skin: "スキン",
        bom: "ＢＯＭ",
        autoGroup: "自動グループ",
        relay: "リレー",
        telepathy: "テレパシー",
        camera: "カメラ",
        asn: "ＡＳＮ",
        kidnap: "Kidnap",
        command: "Commands",
        environment: "Environment",
        zones: "Zones"
    },
    misc: {
        settings: "設定",
        customAccessLevel: "カスタムアクセスレベル",
        delete: "この!~MODULE~!を削除してもよろしいですか？",
        deleteText: "この!~MODULE~!の!~NAME~!を本当に削除してもよろしいですか？",
        isAdult: "この!~MODULE~!はAdultですか？",
        chatCommands: "チャットコマンド",
        chatCommandsChannel: "チャンネル…",
        chatCommandsCommand: "コマンド…",
        moduleName: "!~MODULE~!の名前….",
        moduleImage: "!~MODULE~!の画像…",
        moduleGroup: "!~MODULE~!のグループ…",
        linkMode: "リンクモード",
        fileType: "無効なファイル形式です。JPG、PNG、GIF、WEBP 形式の画像のみが許可されます。",
        fileSize: "ファイルサイズが５㎆の制限を超えています。ファイルサイズ：",
        tooltip: {
            customAccessLevel: "権限メニューで設定されたアクセスレベルを上書きするアクセスレベルを設定します。",
            name: "この!~MODULE~!の名前です。",
            img: "この!~MODULE~!の画像のＵＵＩＤかＵＲＬを入力してください。",
            imgSelect: "このプロファイルで使用する画像ファイルをディスクから選択します。<br/>png、jpg、webp など…",
            isAdult: "プロファイルがAdult向けである場合、テレポート機能のＰＧで使用されます。",
            delete: "この!~MODULE~!とそのすべてのリンクを削除します。元に戻すことはできません。",
            linkMode: "リンクモードは、現在アクティブなプロファイルにリンク／割り当てる方法です。",
            listMode: "リストモードでは、現在アクティブな／装着している!~MODULE~!を変更できます。",
            access: "!~MODULE~!モジュールへのアクセスは、権限によって制限されています。",
            selectUser: "ＨＵＤを操作するユーザーを選択してください。",
            notifications: "ＨＵＤ通知センター",
            accessRelay: "アクセスとリレー",
            homePage: "ホームページ",
            toggleSidebar: "モジュールサイドバーを切り替え"
        },
        states: {
            outerwear: "アウターウェア",
            underwear: "アンダーウェア",
            nude: "ヌード",
            nudeCut: "Nude (Cut Off)"
        },
        slots: {
            head: "頭",
            torso: "胴体",
            arms: "腕",
            hands: "手",
            legs: "脚",
            feet: "足",
            waist: "腰",
            crotch: "股間",
            tail: "尻尾",
            wings: "翼",
            ears: "耳"
        },
        effects: {
            rip: "剥ぎ取る",
            steal: "盗む",
            throw: "投げる"
        },
        moduleDisplayName: "!~MODULE~!の表示名…",
        none: "なし",
        unknown: "不明",
        hudUpdateAvailable: "ＨＵＤの新しいアップデートが利用可能です。",
        hudUpdateHere: "こちら",
        hudUpdateReload: "から、ＨＵＤをリロードできます。",
        helpHeader: "ヘルプと情報",
        helpBody: "「Wikiを開く」ボタンをクリックすると、現在使用しているモジュールに関連するWikiページが開きます（利用可能な場合）。「ページガイド」ボタンをクリックすると、現在使用しているページのガイド付きツアーが開始されます。",
        openWiki: "Wikiを開く",
        pageGuide: "ページガイド",
        loadingWebSocket: "WebSocketモジュールを開いています…",
        loadingSetup: "初回セットアップを開いています…"
    },
    cardActive: {
        id: "ＩＤ",
        reload: "この!~MODULE~!をリロードする",
        detach: "この!~MODULE~!を取り外す",
        edit: "この!~MODULE~!を編集する",
        create: "新しい!~MODULE~!を作成する",
        tooltip: {
            reload: "!~MODULE~!をリロードする。<br/>これにより、!~MODULE~!フォルダが取り外され、再装着されます。",
            detach: "!~MODULE~!フォルダを取り外す。<br/>他のモジュールも非アクティブに設定される可能性があります。",
            edit: "この!~MODULE~!の設定を編集します。"
        }
    },
    popups: {
        create: {
            errorName: "名前を空白にはできません！",
            newPrefix: "新しいプレフィックス",
            prefix: "プレフィックス…",
            name: "名前…",
            inventoryName: "インベントリ名…",
            displayName: "表示名…",
            image: "画像…",
            create: "作成",
            slurl: "Slurl…",
            folderTemplate: "フォルダのテンプレート",
            success: "作成に成功しました！"
        }
    },
    tours: {
        home: {
            welcome: {
                title: "FullArray ＨＵＤガイド",
                content: "FullArray ＨＵＤへようこそ！このガイドでは、ＨＵＤの基本的な使い方と機能について説明します。\n\nガイドに再度アクセスする必要がある場合は、ページ上部の「？」ボタンをクリックしてください。\n\nほとんどの項目については、横にある「i」アイコンにマウスを合わせると詳細情報が表示されます。"
            },
            moduleList: {
                title: "モジュールリスト",
                content: "これはあなたが所有するモジュールのリストです。いずれかのモジュールをクリックすると、そのモジュールを管理できるページに移動します。"
            },
            userSelect: {
                title: "ユーザ選択",
                content: "ここで、制御したいユーザを選択できます。\n\nまた、すばやくアクセスできるように、ユーザをお気に入りとして追加することもできます。"
            },
            permissions: {
                title: "権限",
                content: "ここでは、ＨＵＤにアクセスできるユーザの権限を管理したり、ユーザをＨＵＤの所有者として追加したり、ユーザによるＨＵＤへのアクセスをブロックしたりできます。\n\nＲＬＶａリレーを構成することもできます。"
            },
            notifications: {
                title: "通知",
                content: "ここで、システム通知を確認したり、ＨＵＤの更新ログを表示したりできます。"
            },
            settings: {
                title: "設定",
                content: "ここでＨＵＤの設定を構成できます。多数の設定があるため、時間をかけてすべてを確認し、好みに合わせてＨＵＤを構成してください。"
            }
        },
        userSelect: {
            selectSelf: {
                title: "自身を選択",
                content: "これをクリックすると、他のユーザを操作しているときに自分のＨＵＤが選択されます。"
            },
            selectUUID: {
                title: "ＵＵＩＤで選択",
                content: "別のユーザのＵＵＩＤを入力すると、アクセス権がある場合、そのユーザのＨＵＤが操作用に選択されます。"
            },
            favorite: {
                title: "お気に入りのユーザ",
                content: "これは、すばやくアクセスできるようにお気に入りとして追加したユーザのリストです。アクセス権がある場合は、そのうちの１人をクリックすると、操作用のＨＵＤが選択されます。"
            },
            region: {
                title: "リージョンのユーザ",
                content: "このボタンは、周囲のエリアをスキャンして、FullArray ＨＵＤを装着しているユーザを表示します。これは、やり取りするユーザや、お気に入りに追加すしたいユーザを見つけるのに役立ちます。\n\nまた、FullArray ＨＵＤを装着していないユーザ表示し、無料のコピーを提供する機能もあります。\n\n（この機能を悪用してスパムを送信しないでください。そうしないと、この機能にアクセスできなくなります。）"
            },
            hudUsers: {
                title: "ＨＵＤユーザ",
                content: "これは、FullArray ＨＵＤを装着しているリージョン内のユーザのリストです。そのうちの１人をクリックすると、アクセスできる場合はそのＨＵＤが操作用に選択されます。"
            },
            regionUsers: {
                title: "リージョン一覧",
                content: "これは、FullArray ＨＵＤを装着していないリージョン内のユーザのリストです。そのうちの１人をクリックすると、ＨＵＤの無料コピーが提供されます。これは、リージョン内で出会った友人や新しい人にＨＵＤをすばやく提供するのに便利です。\n\n（この機能をスパム送信に悪用しないでください。そうしないと、この機能にアクセスできなくなります。）"
            }
        },
        misc: {
            active: {
                title: "アクティブなカード",
                content: "現在アクティブな!~MODULE~!が表示されます。ここから簡単にリロード、取り外し、または編集ができます。"
            },
            list: {
                title: "!~MODULE~リスト",
                content: "ここでは、作成したすべての!~MODULE~!を見ることができます。\n\n!~MODULE~!の名前または画像をクリックすると、アクティブな!~MODULE~!として設定されます。\n\nアクティブな!~MODULE~!は、周囲がハイライト表示されます。"
            },
            settings: {
                title: "!~MODULE~!設定",
                content: "ここで、アクティブな!~MODULE~!の設定を編集できます。\n\n下のリストでこのボタンをクリックすると、その!~MODULE~!の設定が開きます。",
                contentList: "The settings button on a !~MODULE~! in the list opens its settings, where you can rename, change the image of, or delete it."
            },
            search: {
                title: "!~MODULE~!を検索",
                content: "検索ボックスを使用すると、名前またはプレフィックスで特定の!~MODULE~!をすばやく見つけることができます。"
            },
            header: {
                title: "List Buttons",
                linkMode: "The link button switches the list to Link Mode, where clicking a !~MODULE~! links it to your active Profile instead.",
                create: "The create button adds a new !~MODULE~!."
            }
        },
        profile: {
            welcome: {
                title: "プロファイル",
                content: "プロファイルはFullArrayの中核であり、独自の設定と外観を持つさまざまなペルソナを管理できます。\n\nプロファイルは必要な数だけ作成でき、いつでも切り替えることができます。各プロファイルには独自の設定、アウトフィットなどがあり、切り替えると変更されます。"
            }
        },
        inventory: {
            welcome: {
                title: "インベントリ",
                content: "インベントリを使用すると、必要なときにＨＵＤからアイテムを保存してすばやく再配置できます。\n\nＨＵＤは、アイテムをインベントリに保存し（オブジェクトが変更可能で、リンクの変更で壊れない場合）、アイテムに加えられた変更を保存できます。"
            }
        },
        zones: {
            welcome: {
                title: "Zones",
                content: "Zones are areas in a region that change things for people wearing FullArray while they are inside.\n\nA zone can set an environment preset, outfit rules, or both."
            },
            tabs: {
                title: "Zone Pages",
                content: "Region shows every zone in the region you are in.\n\nZones is the list of zones you have created in every region.\n\nPresets is where you add environment presets to use in your zones."
            },
            region: {
                title: "Current Region",
                content: "The region you are in, use the refresh button after you teleport to see the zones in your new region."
            },
            filters: {
                title: "Filters",
                content: "Show all zones, only your zones, or only the public or private zones in the region."
            },
            cards: {
                title: "Zone Cards",
                content: "Zones are grouped by the user that created them.\n\nThe eye shows the zone bounds in world, and the portal teleports you to the center of the zone.\n\nOn your own zones you can toggle Public and open the settings.\n\nIf you own the land you can toggle Public, Force zones on for everyone, and delete other users' zones."
            },
            list: {
                title: "Your Zones",
                content: "Every zone you have created, shown as Region/Name.\n\nThe settings button lets you edit a zone from any region, unless you are moving a public zone or making it public."
            },
            create: {
                title: "Create a Zone",
                content: "Give the zone a name, then stand at one corner of the area and use the location button for Corner A, then the other corner for Corner B.\n\nThe location buttons also set the region the zone is in."
            },
            height: {
                title: "Height Zone",
                content: "A height zone covers the whole region between a bottom and top height, useful for skyboxes and floors of a build."
            },
            features: {
                title: "Environment & Outfit",
                content: "A zone needs an environment preset, an outfit rule, or both.\n\nOutfit on entry changes everyone's outfit when they walk in, and Block stops them changing to those states while inside.\n\nWhen zones overlap the highest priority applies."
            },
            public: {
                title: "Public Zones",
                content: "Private zones only apply to users that have you as an Owner, or on their Allowlist at their Zone permission level or higher.\n\nPublic zones apply to everyone with the Zone permission set to public, and must be on land owned by you or your active group."
            },
            presets: {
                title: "Environment Presets",
                content: "Add an environment preset with a name and the environment asset UUID, then pick it when creating or editing a zone."
            },
            permission: {
                title: "Zone Permission",
                content: "Whose zones apply to you is set by the Zone permission on the Permissions page.\n\nZones from users on your Blocklist never apply, except zones forced by the land owner."
            }
        },
        kidnap: {
            welcome: {
                title: "Kidnap",
                content: "Kidnap lets you find other people playing and grab them to you, or chase after them.\n\nOnly people that turned Kidnap on can be found, and you can only be found if you turn it on too."
            },
            enabled: {
                title: "Enabled",
                content: "Turn this on to show up in other people's Kidnap list and let them kidnap you.\n\nTurning it off also frees you if you are being held."
            },
            allowTeleport: {
                title: "Allow Teleporting",
                content: "Lets people grab you, which force-teleports you to them.\n\nWith this off people can still chase you, but can't pull you to them."
            },
            dnd: {
                title: "Do Not Disturb",
                content: "Stops anyone from grabbing or chasing you while it is on, without turning Kidnap off.\n\nIt does not free you if someone already holds you, use Break Free for that."
            },
            search: {
                title: "Search",
                content: "Search for someone by name, or use the refresh button to show everyone recently active.\n\nThe list also refreshes itself every few seconds."
            },
            list: {
                title: "Kidnap List",
                content: "The dot on the picture shows if they are online, offline, or can't be grabbed right now.\n\nThe ( i ) button shows their roleplay role and interests from their Profile.\n\nThe handcuffs grab them to you, and the running button teleports you to them."
            },
            held: {
                title: "Being Held",
                content: "The first person to grab or chase you holds you, and only they can grab or chase you until you are free.\n\nWhile held a banner shows at the top of this page with a Break Free button to end it.\n\nThe access level your kidnapper gets to your HUD is set by Current Kidnapper on your Allowlist."
            }
        },
        command: {
            welcome: {
                title: "Chat Commands",
                content: "Chat commands are messages the HUD says on a channel for you, like commands for other HUDs, collars, or furniture.\n\nYou make them here once, then link them to your Outfits, Accessories, and Profiles so they fire automatically.\n\nFullArray commands will NOT work as chat commands."
            },
            create: {
                title: "Create a Command",
                content: "Give the command a name so you can find it when linking, the channel to say it on, and the message to say.\n\nChannel 0 is public chat, most other HUDs and items listen on their own channel."
            },
            list: {
                title: "Your Commands",
                content: "Your commands are listed here, you can edit any field and use the save button to update it, or the trash button to delete it.\n\nEditing a command changes it everywhere it is linked."
            },
            link: {
                title: "Linking Commands",
                content: "Open the settings of an Outfit, Accessory, or Profile and use Chat Commands to link a command to it.\n\nOutfits can fire when worn, removed, or changed to Outerwear, Underwear, or Nude.\nAccessories can fire when worn or removed.\nProfiles fire when the Profile is loaded."
            }
        },
        outfit: {
            welcome: {
                title: "Outfits",
                content: "Outfits are what you wear on your active Profile, each one can be set to Outerwear, Underwear, or Nude from the home page or chat commands.\n\nThe Outfit settings let you pick the Outfit type, link slots together, and set a default Hair and Shoe.\n\nChat command: <prefix> Wear <name>"
            }
        },
        hair: {
            welcome: {
                title: "Hair",
                content: "Hair lets you save your hairs and switch between them.\n\nYou can go bald from the home page and change back to your active Hair at any time.\n\nChat command: <prefix> Change Hair <name>"
            }
        },
        shoe: {
            welcome: {
                title: "Shoes",
                content: "Shoes lets you save your shoes and switch between them.\n\nYou can go barefoot from the home page and change back to your active Shoe at any time.\n\nChat command: <prefix> Change Shoe <name>"
            }
        },
        skin: {
            welcome: {
                title: "Skins",
                content: "Skins lets you save your skins and switch between them.\n\nChat command: <prefix> Change Skin <name>"
            }
        },
        ao: {
            welcome: {
                title: "Ao",
                content: "The Ao (animation overrider) replaces your avatar's default animations, like standing, walking, and sitting.\n\nYou can save as many Aos as you like and switch between them.\n\nChat command: <prefix> Change Ao <name>"
            },
            controls: {
                title: "Ao Controls",
                content: "Quick controls for your active Ao, turn it on or off, and toggle the swimming, ground sit, and sit animations.\n\nThe arrow buttons set which direction the Ao HUD opens."
            }
        },
        camera: {
            welcome: {
                title: "Camera",
                content: "Camera lets you save camera settings, like distance, pitch, and focus, and switch between them.\n\nChat command: <prefix> Change Camera <name>"
            },
            follow: {
                title: "Follow User",
                content: "Follow User points your camera at someone nearby and keeps following them.\n\nRelease Camera gives you back control of your camera."
            }
        },
        accessory: {
            welcome: {
                title: "Accessories",
                content: "Accessories are things you wear on top of your Outfit, like jewellery, collars, or tails.\n\nUnlike most modules you can wear as many Accessories as you like at once.\n\nChat command: <prefix> Accessory Attach <name>"
            },
            detachAll: {
                title: "Detach & Reload",
                content: "Detach all takes off every Accessory you are wearing.\n\nReload Accessories detaches and reattaches everything you are wearing, useful if something did not attach properly."
            },
            list: "Here you can see all the Accessories you have created.\n\nClicking an Accessory wears or removes it, worn Accessories are highlighted.\n\nAn exclusive tag in an Accessory's settings makes it remove the others with the same tag when worn.",
            links: {
                title: "Profile & Outfit Links",
                content: "Accessories linked to your Profile are worn with every Outfit of that Profile.\n\nWhile you are wearing an Outfit, buttons above the list switch to Outfit Links, so you can link Accessories to just that Outfit or keep them off with it.\n\nThe Accessory settings let you pick which Outfit states it is worn at."
            }
        },
        bom: {
            welcome: {
                title: "BOM",
                content: "BOM saves your Bakes on Mesh layers, like tattoos, makeup, or clothing layers, and lets you turn them on and off.\n\nYou can have as many layers on as you like at once.\n\nChat command: <prefix> Bom Attach <name>"
            },
            list: "Here you can see all the BOMs you have created.\n\nClicking a BOM turns it on or off, active BOMs are highlighted.\n\nAn exclusive tag in a BOM's settings turns off the others with the same tag when turned on.",
            links: {
                title: "Profile & Outfit Links",
                content: "BOMs linked to your Profile are worn with every Outfit of that Profile.\n\nWhile you are wearing an Outfit, buttons above the list switch to Outfit Links, so you can link BOMs to just that Outfit."
            }
        },
        title: {
            welcome: {
                title: "Titles",
                content: "Titles are floating text shown above your head.\n\nYou can make as many Titles as you like and switch between them."
            },
            list: "Here you can see all the Titles you have created.\n\nClicking a Title sets it as your active Title, its settings let you edit the lines."
        },
        landmark: {
            welcome: {
                title: "Landmarks",
                content: "Landmarks save places you can teleport to from the HUD.\n\nChat command: <prefix> Tp <landmark>"
            },
            list: "Clicking a Landmark opens the teleport options, so you can teleport yourself, your target, or both.\n\nIf the Landmark has an ASN gate address it dials the gate instead.\n\nThe settings let you update the location, image, and gate address, or use it as your region restart location."
        },
        autoGroup: {
            welcome: {
                title: "Auto Group",
                content: "Auto Group changes your active group when you enter a region, so you always have the right group tag on.\n\nIt can also switch your Profile or Outfit when it triggers."
            },
            list: "Here you can see all the Auto Groups you have created, each one is a region and the group and role to use there.\n\nThe default Auto Group is used in regions that don't have one set."
        },
        huds: {
            welcome: {
                title: "HUDs",
                content: "HUDs lets you use supported product HUDs from inside FullArray, without wearing them."
            },
            list: "Here you can see the HUDs available to you, clicking one opens its controls."
        },
        rlv: {
            welcome: {
                title: "RLV",
                content: "RLV lets you, and people you trust, restrict what your avatar can do. You need a viewer with RLVa turned on, like Firestorm.\n\nWho else can change these is set by the access levels on your Allowlist.\n\nMost options are Allow options, untick one to restrict it."
            },
            leash: {
                title: "Leash",
                content: "Leash yourself to another avatar or an object, and set how the leash particle looks.\n\nFollow Leash Holder On Teleport makes you follow them when they teleport."
            },
            sit: {
                title: "Sit",
                content: "Allow or block sitting and standing up, force sit on an object or the ground, or force stand up."
            },
            inventory: {
                title: "Inventory",
                content: "Restrict viewing your inventory, editing objects, and adding or removing attachments and BOM clothes.\n\nFolders lets you browse your #RLV folder and attach or detach folders."
            },
            touch: {
                title: "Touch",
                content: "Restrict what you can touch, like the world, attachments, HUDs, or things far away."
            },
            chat: {
                title: "Chat",
                content: "Restrict speaking, hearing, gestures, IMs, and your chat range.\n\nReplace Chat and Name Override change what you say and the name it shows."
            },
            teleport: {
                title: "Teleport",
                content: "Restrict teleporting and receiving teleports, force teleports, and block regions.\n\nChain Home teleports you to a SLURL after a set time."
            },
            info: {
                title: "Info",
                content: "Hide the world map, mini-map, your location, names, and hover text."
            },
            vision: {
                title: "Vision",
                content: "Limit how far you can see with blind or blur, lock the camera, or force you to look at someone."
            },
            movement: {
                title: "Movement",
                content: "Allow or block jumping, walking, running, and flying."
            },
            moduleLock: {
                title: "Module Lock",
                content: "Lock the folders of your Profile, Outfit, Accessories, and other modules, so they can't be attached or detached until unlocked."
            }
        },
        asn: {
            welcome: {
                title: "ASN",
                content: "ASN is a dialer for the Alteran Stargate Network, you need to be near an ASN gate to use it."
            },
            address: {
                title: "Address",
                content: "The top row shows the address loaded from a Landmark, the bottom row shows the glyphs you have dialed."
            },
            dhd: {
                title: "Dial Home Device",
                content: "Click the glyphs on the dial home device to dial a gate address."
            },
            options: {
                title: "Dial Options",
                content: "Pick a Landmark with a saved gate address to load it.\n\nMilkyway and Pegasus switch the gate type, and Quick and Slow set the dial speed.\n\nWith an address loaded, Guided mode highlights the next glyph to press, and Direct Dial dials it for you."
            }
        },
        calendar: {
            welcome: {
                title: "Calendar",
                content: "Calendar shows events from Google Calendars you add, and the SL birthdays of people you track."
            },
            manage: {
                title: "Manage Calendar",
                content: "Add a Google Calendar by its name and calendar ID, or turn calendars on and off.\n\nAdd someone's UUID to show their SL birthday."
            },
            view: {
                title: "Calendar View",
                content: "Move between dates, and switch between the month view and the weekly list."
            },
            events: {
                title: "Events",
                content: "Click an event to see its details, with links to open a profile, open the map, or teleport."
            }
        }
    },
    home: {
        categories: {
            tempHuds: "一時的なＨＵＤ",
            interactDoll: "インタラクトドール"
        },
        tooltip: {
            doll: {
                outerwear: "アウトフィットの!~SLOT~!スロットを「アウターウェア」ステートとして設定します。<br/><br/>コマンド：@!~STATE~! !~SLOT~!",
                underwear: "アウトフィットの!~SLOT~!スロットを「アンダーウェア」ステートとして設定します。<br/><br/>コマンド：@!~STATE~! !~SLOT~!",
                nude: "アウトフィットの!~SLOT~!スロットを「ヌード」ステートに設定します。<br/><br/>コマンド：@!~STATE~! !~SLOT~!",
                rip: "あなたのアウトフィットの!~SLOT~!スロットを剥ぎ取ります。<br/>戻すには、衣装修復を使用する必要があります。<br/><br/>コマンド：@Set Outfit Effect !~SLOT~! Rip",
                steal: "あなたのアウトフィットの!~SLOT~!スロットを盗みます。<br/>あなたのアウトフィットを盗んだアバターをぶつけない場合は、衣装修理を使用して修理する必要があります。<br/><br/>コマンド：@Set Outfit Effect !~SLOT~! Steal",
                throw: "あなたのアウトフィットの!~SLOT~!スロットを投げます。<br/>元に戻らない場合は、衣類修理を使って修理する必要があります。<br/>投げると、誰でも拾って盗むことができるプリムが復活します。ぶつかるか、クリックでプリムを相手の手から叩き落とし、地面をクリックすることで取り戻すことができます。<br/><br/>コマンド：@Set Outfit Effect !~SLOT~! Throw"
            },
            outfitOuterwear: "アウトフィットのステートを「アウターウェア」に設定します。<br/><br/>コマンド：@o （スロット名）",
            outfitUnderwear: "アウトフィットのステートを「アンダーウェア」に設定します。<br/><br/>コマンド：@u （スロット名）",
            outfitNude: "アウトフィットのステートを「ヌード」に設定します。<br/><br/>コマンド：@n （スロット名）<br/><br/>指のはさみアイコンは、性器のないヌードのアウトフィットとして設定します。<br/><br/>コマンド：@nc",
            tempHuds: "モジュールの一時的なＨＵＤを取り付け[+]または、取り外し[-]ます。<br/><br/>コマンド：@&lt;モジュール&gt; huds &lt;+/-&gt;"
        },
        hudLock: "ＨＵＤロック",
        bare: "ベア",
        bareTemp: "一時ベア",
        bald: "薄毛",
        baldTemp: "一時薄毛"
    },
    profile: {
        isAdult: "このプロファイルはAdultですか？",
        playOutfitAnimations: "アウトフィットのアニメーションを再生しますか？",
        chatReplacer: "ＲＬＶチャットによる置き換えを許可しますか？",
        bodyType: "身体種別",
        bodyParts: {
            human: "人間",
            furry: "ケモナー",
            noBoob: "胸なし",
            boob: "胸",
            plantigrade: "蹠行性",
            digigrade: "趾行性",
            noTail: "尻尾なし",
            tail: "尻尾",
            feminine: "女性的",
            masculine: "男性的"
        },
        tooltip: {
            rlvName: "ＲＬＶチャットによる置き換えが有効な場合のこのプロファイルの名前を入力します。",
            playOutfitAnimations: "このプロファイルのアウトフィット変更アニメーションを再生するかどうかを切り替えます。",
            chatReplacer: "このプロファイルでＲＬＶチャットによる置き換えの使用を許可するかどうかを切り替えます。",
            bodyParts: "このプロファイルの体の部位のタイプを選択します。<br/>ホームページ上のインタラクトドールの外観が変更されます。<br/>これらは将来のモジュールでも使用されます。",
            commands: "プロファイルが読み込まれた後に実行されるチャットコマンドを指定します。<br/>FullArrayのチャットコマンドは機能しません。"
        },
        placeholders: {
            relayName: "リレー名…"
        },
        errors: {
        },
        errorChannelBlank: "エラー：チャットチャンネルは空白にできません。",
        errorCommandBlank: "エラー：チャットコマンドは空白にできません。",
        bodyPartsCategory: "身体部位",
        titleLabel: "タイトル"
    },
    outfit: {
        setDefaultOutfit: "デフォルトのアウトフィットとして保存",
        outfitType: "アウトフィット種別",
        outfitTypeAdvanced: "詳細",
        outfitTypeBasic: "基本",
        outfitTypeSimple: "簡易",
        linkMode: "リンクモード",
        linkModeNone: "なし",
        linkModeTorso_Crotch: "胴体＆股間",
        linkModeTorso_Crotch_Waist: "胴体＆股間＆腰",
        linkMode_Crotch_Waist: "股間＆腰",
        tooltip: {
            setDefaultOutfit: "このアウトフィットをデフォルトのアウトフィットとして設定します。<br/>設定すると、プロファイルの変更時にこのアウトフィットが読み込まれます。",
            outfitType: "アウトフィット種別を選択します。<br/><br/>詳細：アウトフィットスロットで３種類のステートをすべて使用します。<br/><br/>基本：「詳細」と似ていますが、アウトフィットスロットを使用する必要はありません。<br/><br/>簡易：「アウターウェア」のステートのみを使用します。これは、簡単な装着または取り外しです。",
            linkMode: "アウトフィットのリンクモードを選択します。リンクされたスロットは一緒に接続および解除されます。<br/><br/>なし：アウトフィットをリンクしません。<br/><br/>胴体＆股間：胴体と股間のみをリンクします。<br/><br/>胴体＆股間＆腰：胴体、股間、腰をリンクします。",
            genitalsCrotch: "アウトフィットのステートに応じて、プロファイル内の「genitalsCrotch」フォルダを装着または取り外します。",
            genitalsTorso: "アウトフィットのステートに応じて、プロファイル内の「genitalsTorso」フォルダを装着または取り外します。",
            defaultHair: "このアウトフィットが読み込まれた際にデフォルトで適用される髪型を設定します。",
            defaultShoe: "このアウトフィットが読み込まれた際にデフォルトで装着される靴を設定します。"
        },
        defaultHair: "デフォルトの髪型",
        defaultShoe: "デフォルトの靴",
        torsoGenitalSettings: "胴体の性器の設定",
        crotchGenitalSettings: "股間の性器の設定",
        none: "なし"
    },
    accessory: {
        detachAll: "すべてのアクセサリを取り外す",
        genitalSlotHeader: "性器スロットを上書きします。",
        reload: "アクセサリをリロードします。",
        genitalSlot: {
            none: "なし",
            crotch: "股間",
            torso: "胴体",
            both: "両方"
        },
        tooltip: {
            detachAll: "アクティブなプロファイルからすべてのアクセサリを切り離し、非アクティブに設定します。",
            genitalSlot: "アクセサリを装着すると、性器を取り外すことができるようになります。",
            reload: "これにより、装着しているアクセサリをすべて取り外して、再装着する処理が行われます。",
            profileLinks: "Accessories linked to active profile",
            outfitLinks: "Accessories linked to active outfit",
            outfitLinkSettings: "Settings for this Accessory's link to the active outfit. With no states ticked it is worn whenever the outfit is worn.",
            profileOnly: "Only use this link while the active profile is loaded. Off applies it to every profile wearing this outfit.",
            outfitStates: "Only wear this Accessory when this slot is in a ticked state. Every slot with a tick must match.",
            profileLinkSettings: "Wear this Accessory with every outfit of this profile when the ticked states match. Nothing ticked turns it off. The active outfit can override it.",
            profileStates: "Only wear this Accessory when this slot is in a ticked state. Every slot with a tick must match.",
            outfitMode: "Follow Profile Default uses the Profile Default States. Wear and Never Wear override them for this outfit."
        },
        outfitLinks: "Outfit Links",
        profileLinks: "Profile Links",
        outfitLinkSettings: "Outfit Link",
        profileOnly: "Only for this Profile",
        profileLinkSettings: "Profile Default States",
        outfitMode: "This Outfit",
        outfitModes: {
            none: "Follow Profile Default",
            wear: "Wear",
            never: "Never Wear"
        }
    },
    hair: {
    },
    shoe: {
    },
    rlv: {
        categoryLeash: "リーシュ（鎖）",
        leashFollowTp: "テレポートでリーシュホルダーを追跡する",
        leashRecover: "リーシュのターゲットを復元する",
        leashLookatTarget: "リーシュホルダーを強制的に見る",
        leashGrab: "リーシュを掴む",
        leashRelease: "リーシュを放つ",
        leashYank: "リーシュを引っ張る",
        leashToObject: "オブジェクトにリーシュをつなぐ",
        leashToAvatar: "アバターにリーシュをつなぐ",
        headerLeashPatricle: "リーシュのパーティクル",
        leashColor: "＜｜色｜＞",
        leashRibbon: "リボンのパーティクルを使用",
        leashPlaceholderUUID: "テクスチャのＵＵＩＤ…",
        leashFullBright: "明るさ全開",
        leashGlow: "グロー",
        categorySit: "座る",
        sit: "座るのを許可",
        unsit: "立つのを許可",
        placeholderSit: "地面に座るか、ＵＵＩＤ…",
        forceSit: "オブジェクトに座る",
        forceUnsit: "強制的に立たせる",
        categoryFolders: "フォルダ",
        categoryinventory: "インベントリ",
        resetFolderView: "ＲＬＶフォルダをリセット",
        folderOpen: "フォルダを開く",
        folderAttach: "フォルダを装着",
        folderDetach: "フォルダを取り外す",
        showinv: "インベントリを見る",
        edit: "オブジェクトを編集",
        unsharedFoldersLock: "共有されていないフォルダ",
        addAttach: "装着物を追加",
        remAttach: "装着物を削除",
        addOutfit: "ＢＯＭ衣装を追加",
        remOutfit: "ＢＯＭ衣装を削除",
        categoryTouch: "触る",
        touchAll: "全てに触る",
        touchAttach: "装着物を触る",
        touchAttachSelf: "自身の装着物を触る",
        touchAttachOther: "他人の装着物を触る",
        touchWorld: "ワールドを触る",
        touchHud: "ＨＵＤを触る",
        fartouch: "遠くを触る",
        categoryChat: "チャット",
        chatExceptions: "チャットの例外を使用",
        chatExceptionsTooltip: "RLV_CHATへのアクセス権を持つ許可リストの所有者とユーザが、引き続きチャットメッセージを送信できるかどうかを切り替えます。",
        speak: "話す（チャット）",
        recvchat: "聞く（チャット）",
        sendgesture: "ジェスチャーを使用",
        chatRange: "チャット範囲",
        recvim: "ＩＭ受信",
        startim: "ＩＭ開始",
        sendim: "ＩＭ送信",
        replaceChat: "チャット置き換え",
        nameOverride: "名前の上書き",
        useRlvName: "名前を上書きしますか？",
        categoryTeleport: "テレポート",
        tp: "テレポート",
        tplure: "テレポートを受け取る",
        accepttp: "強制テレポートを承諾する",
        tprequest: "テレポートのリクエストを受ける",
        regionBlocklist: "リージョンのブラックリスト",
        summon: "強制テレポートで自分のところへ",
        goto: "強制テレポートで彼らのところへ",
        categoryInfo: "情報",
        showworldmap: "ワールドマップで表示",
        showminimap: "ミニマップで表示",
        showloc: "場所を表示",
        shownames: "名前を表示",
        showhovertextworld: "ホバーテキストを表示（ワールド）",
        showhovertexthud: "ホバーテキストを表示（ＨＵＤ）",
        categoryVision: "視覚",
        visionLimit: "視覚制限",
        visionType: "視覚種別",
        visionTypes: {
            blind: "目隠し",
            blur: "ぼかし"
        },
        visionMin: "最小：",
        visionMax: "最大：",
        camunlock: "カメラのアンロック",
        rlv_lookAt: "アバター／ＵＵＩＤを見る",
        categoryMovement: "移動",
        movement: "ユーザを微調整＆回転",
        jump: "ジャンプを許可",
        walk: "歩行を許可",
        run: "走行を許可",
        fly: "飛行を許可",
        categoryModuleLock: "モジュールロック",
        lockProfile: "プロファイルをロック",
        lockOutfit: "アウトフィットをロック",
        lockStripper: "ストリッパーをロック",
        lockAccessory: "アクセサリをロック",
        lockHair: "髪型をロック",
        lockShoe: "靴をロック",
        lockAo: "ＡＯをロック",
        lockSkin: "スキンをロック",
        lockBom: "ＢＯＭをロック",
        chainHome: "チェインホーム",
        chainHome_tooltip: "これにより、一定時間（秒）経過後に指定されたＳＬＵＲＬへ強制的にテレポートさせることができます。",
        teleportRestrictions: "テレポート／制限",
        errorNoUuid: "ＵＵＩＤが指定されていません。",
        leashDistance: "距離",
        leashSpeed: "スピード",
        chainHomePlaceholderSlurl: "ＳＬＵＲＬ",
        chainHomePlaceholderTime: "時間",
        regionBlocklistPlaceholder: "ブロックしたいリージョンのＳＬＵＲＬ…",
        regionBlocklistErrorBlank: "リージョンのＳＬＵＲＬは空白にできません。",
        headerLeashParticle: "鎖のパーティクル",
        categoryInventory: "インベントリ",
        leashLinkStartEnd: "Link Start/End",
        leashScale: "Scale",
        leashAlpha: "Alpha"
    },
    huds: {
    },
    landmark: {
        updateLandmark: "ランドマーク更新",
        utility_useForRestart: "リージョン再起動時に使用しますか？",
        asn: "近くのＡＳＮゲートをスキャンしますか？",
        tooltips: {
            utility_useForRestart: "現在いるリージョンが再起動したときに、このランドマークをテレポート場所として使用しますか？",
            asn: "近くにある「Alteran Stargate Network（ＡＳＮ）」ゲートをスキャンし、そのアドレスをこのランドマークに保存しますか？"
        },
        tooltip: {
            utility_useForRestart: "現在いるリージョンが再起動した際に、このランドマークをテレポート地点として使用しますか？",
            asn: "近くにある「Alteran Stargate Network（ＡＳＮ）ゲートをスキャンして、そのアドレスをこのランドマークに保存しますか？",
            refreshImage: "Get the parcel image again from Second Life. You must be in the Landmark region first."
        },
        refreshImage: "Refresh Landmark image"
    },
    inventory: {
        rezInstaller: "インストーラーをRez",
        rezEmptyBox: "空箱をRez",
        autoSit: "Rezしたときに自動的に座りますか？",
        useRotation: "回転を使用しますか？",
        position: "位置：",
        heightOffset: "高さのオフセット値：",
        rotation: "回転：",
        cleanupTime: "クリーンアップ時間：",
        rez: "Rez",
        rezAtPosition: "位置にRez",
        rezAtCamera: "カメラにRez",
        derez: "Rez解除",
        cleanOnLeave: "去ったときにクリーンアップ",
        useForklift: "アイテムをRezするときTinesシステムを使用しますか？",
        deleteInworld: "Delete inworld inventory item aswell?",
        tooltips: {
            rezInstaller: "インストーラーボックスをRezして、ＨＵＤにアイテムを簡単に追加します。",
            rezEmptyBox: "プレフィックスで使用するために空箱を再生成します。",
            useForklift: "これにより、Rezされたオブジェクトへの変更を保存できるようになります。ただし、これはすべてに機能するわけではありません。"
        },
        tooltip: {
            rezInstaller: "インストーラーボックスを配置し、ＨＵＤにアイテムを簡単に追加できるようにします。",
            rezEmptyBox: "接頭辞に使用するための空のボックスをRezします。",
            useForklift: "これにより、配置されたオブジェクトへの変更を保存できますが、注意！これはすべてのオブジェクトで機能するわけではありません！"
        }
    },
    ao: {
        power: "ＡＯ電源",
        doTyping: "入力アニメーションを再生しますか？",
        doCycle: "アニメーションをサイクルしますか？",
        cycleTime: "サイクル時間：",
        sitHeight: "座ったときの高さ：",
        crouchHeight: "しゃがんだときの高さ：",
        groundSitHeight: "地面に座ったときの高さ：",
        gravity: "重力：",
        flightSpeed: "飛行速度：",
        doSwimming: "泳ぎますか？",
        dampen: "減速：",
        floaty: "浮力はありますか？",
        speed: "泳ぐ速度：",
        useLM: "LockMeisterの操作を許可しますか？",
        useOC: "OpenCollarの操作を許可しますか？",
        tooltip: {
            power: "ＡＯのオン／オフを切り替えます。",
            doTyping: "ＡＯの入力アニメーションのオン／オフを切り替えます。",
            doCycle: "ＡＯの立ち上がるアニメーションをサイクルさせるかどうかを切り替えます。",
            cycleTime: "アニメーションのサイクル時間（秒）。",
            sitHeight: "座っているときのホバーの高さを調整するためのＡＯの浮動小数点値。",
            crouchHeight: "しゃがんでいるときのホバーの高さを調整するためのＡＯの浮動小数点値。",
            groundSitHeight: "地面に座っているときのホバーの高さを調整するためのＡＯの浮動小数点値。",
            gravity: "ＡＯの重力を表す浮動小数点値。",
            flightSpeed: "ＡＯの飛行速度を表す浮動小数点値。",
            doSwimming: "ＡＯの泳ぐ機能を切り替えます。",
            dampen: "水中でのＡＯの減衰速度の浮動小数点値。",
            floaty: "泳ぐ機能を使用して、ゆっくりと水面に浮かぶかどうかを切り替えます。",
            speed: "ＡＯの泳ぐ速度の浮動小数点値。",
            useLM: "ＡＯがLockMiester電源コマンドをリッスンするかどうかを切り替えます。",
            useOC: "ＡＯがOpenCollar電源コマンドをリッスンするかどうかを切り替えます。",
            doGroundSit: "ＡＯが地面に座っているときのアニメーションを再生するかどうかを切り替えます。",
            doSit: "ＡＯが座っているときのアニメーションを再生するかどうかを切り替えます。",
            hudMode2: "ＨＵＤを上方向に開くように切り替えます。",
            hudMode3: "ＨＵＤを下方向に開くように切り替えます。",
            hudMode0: "ＨＵＤを左方向に開くように切り替えます。",
            hudMode1: "ＨＵＤを右方向に開くように切り替えます。"
        }
    },
    skin: {
    },
    bom: {
        outfitLinks: "アウトフィットのリンク",
        profileLinks: "プロファイルのリンク",
        profileButton: "プロファイル",
        outfitButton: "アウトフィット",
        tooltip: {
            profileLinks: "有効なプロフィールにリンクされたＢＯＭ",
            outfitLinks: "有効なアウトフィットにリンクされたＢＯＭ"
        }
    },
    autoGroup: {
        isDefault: "デフォルトのグループとしますか？",
        tooltip: {
            isDefault: "リージョンに何も設定されていない場合は、このグループをデフォルトのグループとして使用するかどうかを切り替えます。",
            roleName: "このグループに使用する役割名（タイトルではありません）。",
            profile: "Profile to switch to when this Auto Group triggers.",
            outfit: "Outfit to switch to when this Auto Group triggers.",
            outfitPartialName: "Finds the outfit on your current profile whose name best matches this text and wears it when this Auto Group triggers. Skipped if no outfit matches."
        },
        placeholder: {
            roleName: "役割名…",
            groupName: "グループ名…",
            groupUuid: "グループのＵＵＩＤ…",
            groupRole: "グループの役割…",
            regionSlurl: "リージョンのＳＬＵＲＬ…"
        },
        errorBlank: "ＳＬＵＲＬかＵＵＩＤは、空白にはできません。",
        created: "作成しました。",
        placeholders: {
            roleName: "役割名…",
            groupName: "グループ名…",
            groupUuid: "グループのＵＵＩＤ…",
            groupRole: "グループの役割…",
            regionSlurl: "リージョンのＳＬＵＲＬ…",
            outfitPartialName: "Outfit name contains..."
        },
        profileLabel: "Profile",
        outfitLabel: "Outfit",
        outfitPartialNameOption: "Partial Name..."
    },
    relay: {
        hudLock: "あなたのＨＵＤをロックしますか？",
        resetRestrictions: "ＲＬＶリレーの制限をクリア",
        setting_relayTrust: "トラストモードをリレー",
        setting_relayAuto: "自動承認をリレー",
        setting_relayPower: "リレーの電源",
        setting_allowAttachmentControl: "装着物の操作を許可しますか？",
        setting_safeword: "セーフワード：",
        setting_useSafeword: "セーフワードの使用を許可しますか？",
        setting_useJasX: "JasXゲームコマンドを許可しますか？",
        setting_useProjectClothing: "Project Clothingコマンドを許可しますか？",
        rlvBlocklist: "ＲＬＶブラックリスト",
        rlvCommands: "ＲＬＶコマンド",
        checkbox: {
            pcUseEffect: "ＰＣのドジっ子モードで衣装を投げますか？",
            jasXAutoDress: "Bareゲーム後に服を自動着用しますか？"
        },
        tooltip: {
            jasXAutoDress: "Bareゲーム後にＨＵＤが自動的に服を着るかどうかを切り替えます。",
            pcUseEffect: "Project Clothingのドジっ子効果が発生したときに、アウトフィットが衣装を投げるかどうかを切り替えます。",
            hudLock: "有効にすると、ＨＵＤを切り離せなくなります。",
            safeword: "セーフワードをチャットに入力すると、ＲＬＶリレーによって設定されたすべての制限が解除されます。これは、行き詰まった場合や制限をすばやく解除する必要がある場合に便利です。<br/>下記の次のいずれかを入力します。<br/>((!~SAFEWORD~!))<br/>(( !~SAFEWORD~! ))<br/>/!~CHANNEL~! @safeword !~SAFEWORD~!",
            relayTrust: "これを有効にすると、リレーは、自分が所有するオブジェクト、区画の所有者が所有するオブジェクト、または区画と同じグループに設定されているオブジェクトからのリクエストを自動的に受け入れます。",
            relayAuto: "有効にすると、リレーはすべてのリクエストを自動的に受け入れます。",
            relayPower: "リレーのオン／オフ",
            allowAttachmentControl: "リレーを有効にすると、`@remoutfit`、`@detach`、`@remattach` コマンドが使用できるようになります。これにより、メッシュボディ、ヒートなどより昔に作成された古いＲＬＶスクリプトで問題が発生する可能性があります。",
            allowSafeword: "有効にすると、上記で設定したセーフワードを使用して、リレーからすべてのＲＬＶ制限を回避／解除できます。",
            useJasX: "有効にすると、リレーはJasXのゲームコマンドをＨＵＤコマンドに変換し、ゲームがアウトフィットに影響を与えることができるようになります。",
            useProjectClothing: "有効にすると、リレーはProject ClothingコマンドをＨＵＤコマンドに変換し、Project Clothingのオブジェクトやトラップなどによって、アウトフィットを変更できるようになります。"
        }
    },
    permissions: {
        permissions: {
            header: "権限",
            isSelfOwner: "自身の所有者ですか？",
            isPublic: "パブリックですか？",
            sameRegion: "同一リージョン操作",
            setAccessLevel: "!~MODULE~!のアクセスレベルを設定",
            setSelfAccessLevel: "!~MODULE~!のセルフアクセスレベルを設定",
            setPublicAccessLevel: "!~MODULE~!のパブリックアクセスレベルを設定",
            tooltips: {
                isSelfOwner: "自分のＨＵＤの所有者ステータスを切り替えます。\n無効にすると、自分の許可リストに追加されずに自分のＨＵＤを制御できなくなります。",
                isPublic: "これは、「パブリック」にチェックが入っているすべてのモジュールのグローバルトグルです。\nモジュールをパブリックに設定すると、ブロックリストに登録されていないユーザもそのモジュールにアクセスできるようになります。",
                sameRegion: "ＨＵＤを制御するために他のユーザが、あなたと同じリージョンにいる必要があるかどうかを切り替えます。",
                location: "ユーザがあなたの現在位置を確認して知ることができ、あなたのところにテレポートできるようになります。"
            },
            tooltip: {
                isSelfOwner: "自分のＨＵＤの所有者ステータスを切り替えます。\n無効にすると、自分の許可リストに追加されない限り、自分のHUDを制御できなくなります。",
                isPublic: "「パブリック」としてマークされているすべてのモジュールのパブリックアクセスを切り替えます。<br/>有効にすると、ブロックリストに登録されていないユーザも使用できます。<br/>デフォルトでは、すべてのモジュールが公開されています。",
                sameRegion: "他のユーザがＨＵＤを操作するために、同じリージョンにいる必要があるかどうかを切り替えます。",
                location: "ユーザがあなたの現在地を確認したり、あなたの場所にテレポートしたりすることを可能にします。",
                zone: "Whose zones apply to you.</br>Your Owners, and Allowlist users at this level or higher, apply all their zones, public and private.</br>Public lets everyone else's public zones apply.</br>Zones from users on your Blocklist never apply, except zones forced by the land owner."
            }
        },
        allowlist: {
            header: "許可リスト",
            currentLeashHolder: "現在のＲＬＶリーシュのホルダー",
            friends: "ＳＬのフレンド",
            placeholders: {
                addAllowlistUUID: "あなたの許可リストに追加したいＵＵＩＤ…"
            },
            tooltips: {
                about: "許可リストは、ＨＵＤの一部を操作することが許可されているユーザのリストです。\n各モジュールとユーザには独自のアクセスできるレベルがあり、ユーザのレベルがモジュールのレベルと同じかそれ以上であれば、そのモジュールを使用できます。",
                currentLeashHolder: "現在のあなたのアバターのＲＬＶリーシュのホルダーです。",
                friends: "あなたのＳＬのフレンドのアクセスレベルのリストです。"
            },
            tooltip: {
                about: "許可リストは、ＨＵＤの一部を操作することが許可されているユーザーのリストです。\n各モジュールとユーザーには独自のアクセスレベルがあり、ユーザーのレベルがモジュールのレベルと同じかそれ以上であれば、そのモジュールを使用できます。",
                currentLeashHolder: "現在のあなたのアバターのＲＬＶリーシュ保持者です。",
                friends: "あなたのＳＬフレンドリストへのアクセスレベル。",
                kidnapper: "The access level for the avatar currently holding you kidnapped."
            },
            kidnapper: "Current Kidnapper"
        },
        blocklist: {
            header: "ブロックリスト",
            blocklist: "ブロックリスト",
            placeholders: {
                addBlocklistUUID: "あなたのブロックリストに追加したいＵＵＩＤ…"
            }
        },
        ownerlist: {
            header: "所有者リスト",
            ownerlist: "所有者リスト",
            placeholders: {
                addOwnerUUID: "あなたの所有者として追加したいＵＵＩＤ…"
            },
            tooltips: {
                about: "所有者リストは、ＨＵＤに対するほぼ完全な制御が許可されているユーザのリストです。\n設定メニュー内の項目は、所有者リストのどのユーザも変更できません。"
            },
            tooltip: {
                about: "所有者リストは、ＨＵＤをほぼ完全に制御できるユーザのリストです。設定メニューの項目は、所有者リストに登録されているユーザによって変更することはできません。"
            }
        },
        apiList: {
            header: "ＡＰＩリスト"
        },
        tabs: {
            permissions: "権限",
            ownerlist: "所有者リスト",
            allowlist: "許可リスト",
            blocklist: "ブロックリスト",
            apiList: "ＡＰＩリスト",
            relay: "リレー"
        }
    },
    settings: {
        uiVersion: "ＵＩバージョン－",
        hudVersion: "ＨＵＤバージョン－",
        loginToken: "ログイントークン",
        editModuleOrder: "モジュールの順番を編集",
        serverInventory: "サーバーインベントリ",
        saveHudPosition: "ＨＵＤの位置を保存",
        listType: "リスト種別",
        listTypes: {
            list: "リスト",
            icon: "アイコン",
            iconSmall: "小アイコン",
            card: "カード",
            cardList: "カードリスト"
        },
        uiScale: "ＵＩスケール",
        uiScales: {
            small: "小",
            default: "デフォルト",
            large: "大"
        },
        uiVolume: "ＵＩボリューム",
        apiKey: "ＡＰＩキー",
        utility_regionRestart_mode: "リージョン再起動時に自動テレポートしますか？",
        utility_regionRestart_time: "テレポートまでの遅延：",
        categories: {
            account: "アカウント",
            general: "一般",
            ui: "ＵＩ",
            api: "ＡＰＩ",
            profile: "プロファイル",
            outfit: "アウトフィット",
            hair: "髪型",
            shoe: "靴",
            accessory: "アクセサリ",
            autoGroup: "自動グループ",
            tempHuds: "一時的なＨＵＤ",
            landmark: "ランドマーク",
            environment: "Environment",
            advanced: "Advanced",
            zones: "Zones"
        },
        checkbox: {
            useGrid: "グリッドレイアウトを使用しますか？",
            sortListsByName: "リストを名前順で並べ替えますか？",
            hudSide: "ＨＵＤのサイドを切り替える",
            useTargetColor: "ターゲットのＨＵＤカラーを使用する",
            categoryState: "デフォルトのカテゴリステート",
            api_message: "ＡＰＩメッセージを送りますか？",
            api_linkMessage: "ＡＰＩのリンクメッセージを送りますか？",
            autoWearOutfit: "読み込まれたときにアウトフィットを自動装着しますか？",
            profile_replaceAll: "読み込まれた時にすべてを置き換えますか？",
            autoWearShoe: "靴を自動装着しますか？",
            autoWearHair: "髪型を自動装着しますか？",
            allowHairBald: "薄毛ステートを許可しますか？",
            autoWearAccessories: "アクセサリを自動装着／取り外しをしますか？",
            autoPG: "ＰＧ／一般ＳＩＭでヌードになってしまうのを抑止しますか？",
            shoeReplaceFeet: "靴（Shoe）をアウターウェアの足（Feet）の代わりにしますか？",
            playOutfitAnimations: "グローバルのアウトフィットアニメーションを切り替えます。",
            playOutfitSounds: "グローバルのアウトフィットのサウンドを切り替えます。",
            allowEffects: "エフェクトを許可しますか？盗む、剥ぎ取るなど…",
            sameRegion: "同一リージョンでのみ操作しますか？",
            showIds: "リストにＩＤを表示しますか？",
            defaultNavState: "ホームにナビゲートされたときのデフォルトのステート。",
            defaultActiveCardState: "アクティブなカードのデフォルトのステート。",
            defaultDollState: "インタラクトドールのデフォルトのステート。",
            showAfk: "ＡＦＫのオーバーレイを表示しますか？",
            autoGroup_power: "テレポート時にグループを自動変更しますか？",
            linkOnCreate: "新しく作成されたエントリを自動リンクしますか？",
            autoGroup_useNone: "デフォルトのアクティブなグループが存在しません。",
            autoGroup_autoHuds: "ＨＵＤフォルダを自動装着します。",
            hud_verbose: "詳細なＨＵＤメッセージを表示しますか？",
            log_permissions: "詳細な権限エラーのログを取ります。",
            protectedFolderLock: "保護フォルダをロックします。",
            defaultTempHudState: "一時的なＨＵＤのデフォルトのステート。",
            autoCreateFolders: "フォルダを自動作成しますか？",
            hud_sideDock: "ＨＵＤはドックモードです。",
            landmark_asnFirst: "テレポートする前にＡＳＮスキャンしますか？",
            general_showCategoryAttach: "カテゴリの装着／取り外しを表示しますか？",
            outfit_keepSame: "アウトフィットを保持しますか？",
            outfit_defaultIsAdult: "New Outfits default to Adult?",
            environment_usePublicZones: "Apply other users' public Environment zones?",
            environment_keepIfNoMatch: "Keep environment if none found?",
            outfit_usePublicNudeZones: "Apply others' public Nude Places?",
            outfit_usePublicDressedZones: "Apply others' public Dressed Places?",
            outfit_usePublicZones: "Apply others' public Outfit zones?"
        },
        textbox: {
            prefixPlaceholder: "プレフィックス…",
            passwordPlaceholder: "パスワード…",
            userChannelPlaceholder: "チャンネル…"
        },
        popup: {
            setLang: "言語設定",
            hudColors: "ＨＵＤカラーを設定",
            apiHeader: "ＡＰＩキーのリセット",
            apiText: "ＡＰＩキーをリセットしてもよろしいですか？\nリセットすると、そのキーを使用しているスクリプトが壊れてしまいます。",
            moduleList: "モジュールリストの編集",
            about: "情報",
            lang: "言語選択"
        },
        tooltip: {
            expRlvaFix: "ＨＵＤがＲＬＶコマンド間に遅延を追加するかどうかを切り替えます。",
            editModuleOrder: "ナビゲーションバーのモジュールを並べ替えたり切り替えたりします。",
            serverInventory: "オプションの納品物。",
            hudColors: "ＨＵＤを美しくする方法。",
            sortListsByName: "名前またはＩＤでリスト／グリッドモードを並べ替えます。",
            useTargetColor: "ＨＵＤで、操作しているユーザのＨＵＤカラーを使用するかどうかを切り替えます。",
            hudSide: "ＨＵＤを左に開くか右に開くかを切り替えます。",
            categoryState: "カテゴリがデフォルトで開いているか閉じているかを切り替えます。",
            saveHudPosition: "ＨＵＤが現在画面上に表示されている位置を保存します。ＨＵＤ自体を置き換える必要がある場合に便利です。",
            listType: "カテゴリ内のリストのスタイルを変更します。",
            uiSize: "ＨＵＤ全体のＵＩスケールを変更します。",
            defaultNavState: "ナビゲーションバーがデフォルトで開いているか閉じているかを切り替えます。",
            defaultActiveCardState: "モジュールのアクティブカードをデフォルトで表示するか非表示にするかを切り替えます。",
            defaultDollState: "インタラクトドールをデフォルトで表示するか非表示にするかを切り替えます。",
            showAfk: "数秒後にＡＦＫ画面が表示されるかどうかを切り替えます。",
            linkOnCreate: "新しく作成されたエントリをアクティブなプロファイルに自動的にリンクするかどうかを切り替えます。",
            hud_verbose: "起動時にＨＵＤに情報を表示するかどうかを切り替えます。",
            protectedFolderLock: "保護フォルダを常にロックするかどうかを切り替えます。",
            defaultTempHudState: "一時的なＨＵＤコントロールをデフォルトで非表示にするかどうかを切り替えます。",
            hud_sideDock: "ＨＵＤをルートプリムの下にドッキングするか、移動先の場所にドッキングするかを制御します。",
            apiKey: "作成された製品のＡＰＩキーです。<br/><br/><strong>これを共有しないでください！</strong><br/><br/>このキーを再発行すると、古いキーを使用していた以前のコンテンツがすべて壊れます。",
            api_message: "ＨＵＤがＡＰＩメッセージを送信するかどうかを切り替えるチャンネル：698008",
            api_linkMessage: "ＨＵＤがllMessageLinkedを使用してＡＰＩメッセージを送信するかどうかを切り替えます。",
            showIds: "ＨＵＤにエントリのＩＤを表示するかどうかを切り替えます。",
            log_permissions: "別のユーザの権限チェックが失敗した場合に、ＨＵＤでチャットに表示するかどうかを切り替えます。",
            autoWearOutfit: "プロファイルを読み込むときに、ＨＵＤが最後に着用したアウトフィットを自動的に着用するかどうかを切り替えます。",
            profile_replaceAll: "プロファイルを装着する前に、ＨＵＤがアバター上のすべてのものを切り離すかどうかを切り替えます。<br/>これには、#RLVフォルダ内のものも含まれます。",
            autoPG: "ＰＧ／一般ＳＩＭにテレポートするときに、ＨＵＤが自動的にアウトフィットをアウターウェアのステートに設定するか、非Adult用衣装に変更するかを切り替えます。<br/>また、ＰＧ／一般ＳＩＭでヌードのステートになることも防止します。",
            shoeReplaceFeet: "ＨＵＤがアウトフィットの足（Foot）をステートに合わせて靴（Shoe）を自動的に取り付けたり取り外したりするかどうかを切り替えます。",
            playOutfitAnimations: "アウトフィットやそのステートを変更したときにＨＵＤでアニメーションを再生するかどうかを切り替えます。",
            playOutfitSounds: "アウトフィットやそのステートを変更したときにＨＵＤでサウンドを再生するかどうかを切り替えます。",
            allowEffects: "アウトフィットが盗まれたり剥ぎ取られたりできるようにするかどうかを切り替えます。",
            outfit_keepSame: "新しいプロファイルに同じアウトフィットが紐づけられていた場合、プロファイルを変更したときにＨＵＤが着用中の同じアウトフィットを保持しようとするかどうかを切り替えます。",
            autoWearHair: "プロファイルを読み込むときに、ＨＵＤが最後に使用したヘアスタイルを自動的に使用するかどうかを切り替えます。",
            allowHairBald: "髪型を完全に取り外せるかどうかを切り替えます。",
            autoWearShoe: "アウトフィットを読み込むときに、ＨＵＤが最後に履いた靴を自動的に履くかどうかを切り替えます。",
            autoWearAccessories: "プロファイルを読み込むときにＨＵＤがアクセサリを自動的に装着および取り外すかどうかを切り替えます。",
            autoGroup_power: "自動グループ機能のオン／オフを切り替えます。",
            autoGroup_useNone: "グループが設定されていない場合は、自動グループを切り替えてグループを「なし」に設定します。",
            autoGroup_autoHuds: "グループを変更するときに、ＨＵＤが一時的なＨＵＤフォルダを自動的に装着するかどうかを切り替えます。",
            autoCreateFolders: "ＨＵＤがプロファイル、衣装などの新しく作成されたエントリのフォルダを自動的に作成するかどうかを切り替えます。",
            utility_regionRestart_mode: "リージョン再起動時の機能のモードを選択します。<br/>オフ：無効<br/>質問：テレポートするかどうかを尋ねます。<br/>自動：設定された遅延の後に、保存した場所に自動的にテレポートします。<br/>即時：リージョンが再起動すると、保存した場所に即座にテレポートします。",
            utility_regionRestart_time: "テレポートするまでの再起動カウントダウンの残り時間（秒）",
            landmark_asnFirst: "有効にすると、ランドマークを使用してテレポートするときにＨＵＤは最初に近くのＡＳＮゲートをスキャンし、見つかった場合はそれを使用してテレポートします。",
            password: "パスワードはＳＬ外のＨＵＤにログインするために使用されます。",
            prefix: "現在のプレフィックス：",
            userChannel: "このチャンネルは、他のユーザまたは自分自身からのチャットコマンドを介してＨＵＤを制御するために使用されます。<br/><br/>注：これを変更すると、以前に使用したコマンドは機能しなくなり、新しいチャンネルを使用する必要があります。<br/><br/>現在のチャンネル：",
            general_showCategoryAttach: "カテゴリ内の装着／取り外しボタンを表示するかどうかを切り替えます。",
            logout: "Log out of the HUD website on this device.",
            outfit_defaultIsAdult: "Toggles whether newly created Outfits will have the Adult flag set by default.",
            outfit_defaultGenitals: "Sets the default Genital visibility states applied to newly created Outfits.",
            environment_usePublicZones: "Toggles whether Environment zones marked Public by other users will apply to you when you enter them. Your own zones always apply regardless of this setting.",
            homeTheme: "Switches between the classic Home layout and the widget-grid Home layout.",
            environment_keepIfNoMatch: "When a Landmark or Auto Group with no Environment assigned triggers, your sky/lighting is normally reset to default. Turn this on to keep whatever environment is currently applied instead.",
            outfit_usePublicNudeZones: "When you walk into another user's public Nude Place you will be stripped to Nude and kept Nude while inside. Turn this off to ignore other users' public Nude Places. Your own, and ones the land owner has forced on, always apply.",
            outfit_usePublicDressedZones: "When you walk into another user's public Dressed Place any Nude parts of your outfit are dressed and you can't go Nude while inside. Underwear is left alone. Turn this off to ignore other users' public Dressed Places. Your own, and ones the land owner has forced on, always apply.",
            outfit_usePublicZones: "When you walk into another user's public Outfit zone your outfit is changed to its outfit on entry and you can't change to the states it blocks while inside. Turn this off to ignore other users' public Outfit zones. Your own, and ones the land owner has forced on, always apply."
        },
        color: {
            colorHeader: "カラー設定",
            categoryPreset: {
                header: "プリセット",
                presetJsson: "プリセット設定をここにペーストしてください…",
                presetJson: "ここにプリセット設定を貼り付けてください…"
            },
            preset: "",
            categoryExample: {
                header: "例",
                button: "ボタン",
                buttonActive: "アクティブなボタン",
                static: "静的",
                textbox: "テキストボックス",
                exmpleHeader: "ヘッダ",
                categoryHeader: "カテゴリヘッダ",
                exampleHeader: "ヘッダ"
            },
            categoryConfig: {
                header: "設定",
                categoryMisc: {
                    header: "その他",
                    border: "枠",
                    hudBackground: "背景",
                    hudAlpha: "アルファ：",
                    hudBackgroundImage: "背景画像のＵＲＬ"
                }
            },
            categoryButton: {
                header: "ボタン",
                button: "ベース",
                buttonHover: "ホバー",
                buttonText: "テキスト",
                buttonTextHover: "テキスト（ホバー）",
                button3D: "３Ｄ",
                button3DHover: "３Ｄ（ホバー）"
            },
            categoryButtonActive: {
                header: "アクティブなボタン",
                button: "ベース",
                buttonHover: "ホバー",
                buttonText: "テキスト",
                buttonTextHover: "テキスト（ホバー）",
                button3D: "３Ｄ",
                button3DHover: "３Ｄ（ホバー）"
            },
            categoryStatic: {
                header: "静的",
                static: "ベース",
                staticText: "テキスト"
            },
            categoryHeader: {
                header: "ヘッダ",
                headerText: "テキスト"
            },
            categoryCategoryHeader: {
                header: "ヘッダ",
                headerText: "テキスト"
            },
            categoryTextbox: {
                header: "テキストボックス",
                textbox: "ベース",
                textboxHover: "ホバー",
                textboxText: "テキスト",
                textboxTextHover: "テキスト（ホバー）",
                textboxPlaceholder: "プレイスホルダ"
            },
            categoryIcons: {
                header: "アイコン",
                iconPrimary: "プライマリ",
                iconSecondary: "セカンダリ"
            },
            categoryDoll: {
                header: "ドール",
                outerwear: "アウターウェア",
                underwear: "アンダーウェア",
                nude: "ヌード",
                disabled: "無効"
            },
            categoryScrollbar: {
                header: "スクロールバー",
                track: "トラック",
                thumb: "つまみ",
                border: "枠"
            },
            colorTitle: "色",
            showBorder: "枠を表示",
            categoryUserSelect: {
                header: "User Select",
                name: "Name",
                outfit: "Profile / Outfit"
            }
        },
        landmark: {
            off: "オフ",
            ask: "問う",
            auto: "自動",
            instant: "即時"
        },
        profile: {
            keepSameNo: "なし",
            keepSame: "保持",
            keepSameSimilar: "類似性を維持"
        },
        about: {
            supporters: "サポーター",
            translators: "翻訳者"
        },
        errorUpdateLocal: "ローカルでの設定の更新に失敗しました。",
        button: {
            logout: "Logout"
        },
        outfitDefaultsHeader: "New Outfit Defaults",
        homeTheme: "Home Screen Style",
        homeThemes: {
            classic: "Classic",
            grid: "Widget Grid"
        },
        search: "Search settings...",
        noResults: "No settings found."
    },
    pantyRaid: {
        noTrophySelected: "以下からトロフィーを選択してください。",
        level: "レベル",
        attempts: "試み",
        stolen: "盗まれた",
        losses: "損失",
        link: "リンク"
    },
    userSelect: {
        selectSelf: "自分のＨＵＤを選択してください。",
        useSupportMode: "開発／サポートモードを使用しますか？",
        selectUUID: "ＵＵＩＤを選択してください。",
        addUserUUID: "お気に入りリストに追加",
        removeUserUUID: "お気に入りいるとから削除",
        userUUID: "対象のＵＵＩＤを選択…",
        favoriteUsers: "お気に入りのユーザ",
        regionList: "リージョンリスト（ＨＵＤギバー）",
        hudUsers: "ＨＵＤユーザ",
        tooltip: {
            selectSelf: "自分のＨＵＤを選択してください。",
            useSupportMode: "有効にすると、アカウントの権限チェックは無視されます。",
            loadUserUUID: "選択したユーザを読み込んで、ＨＵＤを制御します。",
            addUserUUID: "入力したＵＵＩＤをお気に入りリストに追加します。",
            removeUserUUID: "入力したＵＵＩＤをお気に入りリストから削除します。"
        }
    },
    notification: {
        notifications: "通知",
        changelog: "更新履歴",
        unread: "（未読）",
        markAllNotificationsRead: "すべての通知を既読にします。",
        markAllChangelogsRead: "すべての更新ログを既読にします。",
        dismiss: "Mark as read and close."
    },
    camera: {
        followUser: "ユーザをフォロー",
        releaseCamera: "カメラを開放",
        behindnessAngle: "後方角度",
        behindnessLag: "後方遅延",
        distance: "距離",
        focus: "フォーカス",
        focusLag: "フォーカスの遅延",
        focusLocked: "フォーカスのロック",
        focusOffset: "フォーカスのオフセット",
        focusThreshold: "フォーカスのしきい値",
        pitch: "ピッチ",
        position: "位置",
        positionLag: "位置の遅延",
        positionLocked: "位置のロック",
        positionThreshold: "位置のしきい値"
    },
    calendar: {
        tooltip: {
            addUUID: "誕生日を追跡したいユーザのＵＵＩＤを追加します。",
            addGoogleCalendar: "GooglカレンダーＩＤを追加します。"
        },
        manageCalendar: "カレンダーの管理",
        links: "リンク",
        openProfile: "プロフィールを開く",
        openMap: "マップを開く",
        calendars: "カレンダー",
        birthdays: "誕生日",
        placeholder: {
            googleCalendarName: "Googlカレンダー名…",
            googleCalendarId: "GooglカレンダーＩＤ…",
            uuid: "ＵＵＩＤ…"
        },
        placeholders: {
            googleCalendarName: "Googlカレンダー名…",
            googleCalendarId: "GooglカレンダーＩＤ…",
            uuid: "ＵＵＩＤ…"
        },
        teleport: "Teleport",
        today: "Today",
        allDay: "All Day",
        noEventsToday: "No events today."
    },
    login: {
        error: {
            userPass: "ユーザ名とパスワードをご確認ください。",
            token: "無効なログイントークンです。お手数ですがＨＵＤを装着し直してください。"
        }
    },
    setupPage: {
        infoText: "Full Arrayをお買い上げいただきありがとうございます。<br/>このセットアッププロセスは、お客様のお好みに合わせて基本設定を構成するためのものです。以下のオプションをご確認いただき、準備ができたら最後に「セットアップを完了」をクリックしてください。オプションの機能についてご不明な点がある場合は、マウスオーバーで詳細情報が表示される＜情報アイコン＞があるかどうかをご確認ください。<br/><br/>これらの設定はいずれも永続的なものではなく、設定メニューで後から変更できます。",
        themeText: "定義済みのＨＵＤテーマを適用します。\nすべてのテーマは、後で設定メニューから調整できます。",
        categories: {
            theme: "テーマ選択",
            account: "アカウント設定＆権限"
        },
        buttonSaveTheme: "テーマを保存",
        buttonFinish: "セットアップ完了"
    },
    title: {
        save: "タイトルの変更を保存しますか？",
        createTitle: "タイトル作成",
        titleText: "タイトル文字",
        addNewLine: "行を追加",
        titleLabel: "タイトル"
    },
    asn: {
        errorGateDetails: "ゲートの詳細の取得に失敗しました。",
        pegasusMode: "ペガサスモード",
        milkywayMode: "銀河モード",
        quickDial: "クイックダイアル",
        slowDial: "スローダイアル",
        guidedMode: "ガイドモード",
        manualMode: "手動モード",
        directDial: "直接ダイアル",
        selectLandmark: "Select landmark",
        landmarks: "Landmarks",
        errorLandmarkAddress: "Failed to read landmark gate address"
    },
    help: {
        ticketPopup: {
            header: "Submit a Ticket",
            typeSupport: "Bug / Support Issue",
            typeRequest: "Feature Request",
            subjectPlaceholder: "Subject",
            bodyPlaceholder: "Describe the issue or request in detail...",
            submit: "Submit",
            missing: "Please fill in a subject and description.",
            success: "Ticket submitted!",
            viewTicket: "View Ticket"
        },
        header: "Help and Information",
        sectionLearn: "Learn",
        wiki: "Open Wiki",
        wikiTooltip: "Opens the wiki page for the module you're currently on, if one exists.",
        guide: "Page Guide",
        guideTooltip: "Starts a guided walkthrough of the current page."
    },
    kidnap: {
        searchPlaceholder: "Search by name...",
        none: "No matching users. You can only see people who let you teleport them.",
        grab: "Grab them to you",
        chase: "Teleport yourself to them",
        searchButton: "Search",
        refresh: "Show recently active",
        enabled: "Enabled",
        enabledTip: "Let other people find and kidnap you.",
        allowTeleport: "Allow teleporting",
        allowTeleportTip: "Allow being force-teleported by people who can kidnap you.",
        grabDisabled: "This user does not allow being teleported",
        lockedDisabled: "This user can't be grabbed right now",
        dnd: "Do Not Disturb",
        dndTip: "Stop anyone from kidnapping or teleporting you. Does not release a captor who already holds you - use Break Free for that.",
        heldBy: "Held by %s",
        heldNoName: "You have been kidnapped.",
        breakFree: "Break free",
        breakFreeTip: "End the kidnapping and free yourself.",
        grabConfirmHeader: "Grab %s?",
        grabConfirmBody: "This force-teleports %s to your location right now.",
        chaseConfirmHeader: "Chase %s?",
        chaseConfirmBody: "This teleports you to %s right now.",
        viewRp: "View roleplay info",
        rpNone: "No roleplay info set."
    },
    command: {
        title: "Chat Commands",
        manage: "Manage chat commands",
        namePlaceholder: "Name...",
        channelPlaceholder: "Channel...",
        messagePlaceholder: "Message to say...",
        empty: "No chat commands yet.",
        linkTitle: "Chat Commands",
        linkTooltip: "Chat commands fired when this is worn or removed. FullArray commands will NOT work here.",
        addLink: "Link a command",
        onWear: "On wear",
        onRemove: "On remove",
        errorNameBlank: "Error: Command name cannot be blank.",
        errorChannelBlank: "Error: Channel cannot be blank.",
        errorMessageBlank: "Error: Message cannot be blank.",
        errorPickCommand: "Error: Pick a command to link.",
        onOuterwear: "Fire when the outfit changes to Outerwear",
        onUnderwear: "Fire when the outfit changes to Underwear",
        onNude: "Fire when the outfit changes to Nude",
        trigWear: "Wear",
        trigRemove: "Remove",
        trigOuterwear: "Outer",
        trigUnderwear: "Under",
        trigNude: "Nude"
    },
    tag: {
        title: "Exclusive Tag",
        tooltip: "Items sharing a tag are mutually exclusive - attaching one detaches the others.",
        none: "No tag",
        placeholder: "New tag name...",
        errorNameBlank: "Error: Tag name cannot be blank."
    },
    environment: {
        presets: "Environment Presets",
        region: "Region",
        cornerA: "Corner A (down/south/west)",
        cornerB: "Corner B (up/north/east)",
        preset: "Environment preset",
        priority: "Priority",
        enabled: "Enabled",
        errorBlank: "Fill in a name, a region (use the location buttons) and an environment.",
        created: "Environment zone created.",
        placeholders: {
            zoneName: "Zone name...",
            presetName: "Preset name...",
            presetAssetId: "Environment asset UUID..."
        },
        public: "Public (visible to everyone in the region)",
        tabs: {
            zones: "Zones",
            presets: "Presets",
            region: "Region"
        },
        save: "Save",
        updated: "Preset updated.",
        byHeight: "Height zone (whole parcel, just set bottom/top height)",
        heightBottom: "Bottom height",
        heightTop: "Top height",
        filters: {
            all: "All",
            mine: "Mine",
            public: "Public",
            private: "Private"
        },
        noZones: "No zones found.",
        disabled: "Disabled",
        landDelete: "Delete this zone from your land?",
        landDeleteText: "Are you sure you want to delete !~NAME~! owned by !~OWNER~!?",
        showZone: "Show zone bounds",
        center: "Center",
        size: "Size",
        teleportZone: "Teleport to zone center",
        forced: "Forced",
        forcedTooltip: "Force this environment on for everyone in the zone, ignoring their public zone setting (land owner only)"
    },
    zones: {
        tabs: {
            zones: "Zones",
            region: "Region",
            presets: "Presets"
        },
        filters: {
            all: "All",
            mine: "Mine",
            public: "Public",
            private: "Private"
        },
        noZones: "No zones found.",
        disabled: "Disabled",
        center: "Center",
        size: "Size",
        showZone: "Show zone bounds",
        teleportZone: "Teleport to zone center",
        landDelete: "Delete this zone from your land?",
        landDeleteText: "Are you sure you want to delete !~NAME~! owned by !~OWNER~!?",
        forced: "Forced",
        forceEnvironment: "Force the environment on for everyone in the zone, ignoring their public zone setting (land owner only)",
        forceNude: "Force the Nude Place on for everyone in the zone, ignoring their public Nude Place setting (land owner only)",
        region: "Region",
        cornerA: "Corner A (down/south/west)",
        cornerB: "Corner B (up/north/east)",
        byHeight: "Height zone (whole region, just set bottom/top height)",
        heightBottom: "Bottom height",
        heightTop: "Top height",
        preset: "Environment preset",
        noPreset: "None",
        priority: "Priority",
        enabled: "Enabled",
        public: "Public",
        nude: "Nude Place",
        nudeTooltip: "Strips everyone inside to Nude and keeps them Nude while inside. Public Nude Places must be on your land, never in PG regions.",
        errorBlank: "Fill in a name and a region (use the location buttons), and pick an environment or Nude Place.",
        created: "Zone created.",
        placeholders: {
            zoneName: "Zone name..."
        },
        forceDressed: "Force the Dressed Place on for everyone in the zone, ignoring their public Dressed Place setting (land owner only)",
        dressed: "Dressed Place",
        dressedTooltip: "Dresses everyone inside out of Nude and stops them going Nude while inside. Underwear is left alone. Public Dressed Places must be on your land.",
        errorConflict: "A zone can't be both a Nude Place and a Dressed Place.",
        dressOnExit: "Restore outfit on leave",
        dressOnExitTag: "Restores on leave",
        dressOnExitTooltip: "Puts everyone's outfit back the way it was before they were stripped when they leave the Nude Place, unless they are still inside another Nude Place. Outerwear if they changed outfit while inside.",
        forceOutfit: "Force the outfit rules on for everyone in the zone, ignoring their public Outfit zone setting (land owner only)",
        outfit: "Outfit zone",
        outfitTooltip: "Changes the outfit of everyone inside and keeps them out of the blocked states. Public Outfit zones must be on your land, ones that strip to Nude are never allowed in PG regions.",
        entryState: "Outfit on entry",
        entryStateTooltip: "State everyone is changed to when they walk in.",
        entryNone: "No change",
        entryTag: "On entry: !~STATE~!",
        block: "Block",
        blockTooltip: "States nobody can change to while inside. Parts of an outfit already in a blocked state are changed to the most dressed allowed state they have clothing for.",
        blockTag: "Blocks: !~STATES~!",
        outfitPriorityTooltip: "When Outfit zones overlap only the highest priority one applies, the last one entered wins a tie.",
        errorAllBlocked: "At least one outfit state must be allowed.",
        errorEntryBlocked: "The outfit on entry can't be a blocked state.",
        publicTooltip: "Applies to everyone wearing FullArray in the zone, unless they opted out of public zones. Public zones must be on land owned by you or your active group, and you must be in the region to make or move one."
    }
}
