module.exports = {

    infos: {
        public: true,
        language_code: "en",
        language_name: "English",
        language_flag: "🇬🇧"
    },

    general: {
        error_no_stats_title: "Not enough data...",
        error_no_stats_content: "Before displaying and generating projections, I need to **fetch** enough data...\n> Estimated time remaining:",
        error_no_stats_image: "https://i.imgur.com/qtkhzMX.png", // Images will be translated later.
        cooldown_long_title: "You're in cooldown...",
        cooldown_long_content: "**Enabling the ServerPremium** will allow all members to use this command without any limit !\n\n*The use of artificial intelligence consumes a lot of resources, support our project by enabling the premium !",
        cooldown_long_timer_name: "Time Remaining",
        cooldown_long_timer_content: "You can use the command again in",
        cooldown_long_shop_name: "Shop",
        cooldown_long_shop_content: "[` Our shop `](https://discordanalytics.fr/client/user?action=shop) *instructions below!*\n[` Join our Server `](${clientConnection.config.support.invite}) *giveaways and bonuses!*",
        cooldown_long_image: "https://i.imgur.com/pJFcBi8.png",

        months_list: {
            "1": "January",
            "2": "February",
            "3": "March",
            "4": "April",
            "5": "May",
            "6": "June",
            "7": "July",
            "8": "August",
            "9": "September",
            "10": "October",
            "11": "November",
            "12": "December",
        }
    },

    help: {
        help_embed_title: "Server Analytics help page",
        help_embed_field1_name: "Server statistics",
        help_embed_field1_content: "`${prfx}stats` - Server detailed statistics\n> `${prfx}top` - Server members leaderboards\n> `${prfx}graph` - Generate charts\n> `${prfx}forecast` - Forecasts\n> `${prfx}trends` - Server activity trends",
        help_embed_field2_name: "Personal statistics",
        help_embed_field2_content: "`${prfx}me` - Display your statistics on this server\n> `${prfx}u [@member]` - Display the statistics of a member",
        help_embed_field3_name: "Other commands",
        help_embed_field3_content: "`${prfx}counter` - Create and manage counter channels\n> `${prfx}invite` - Invite the bot on your server\n> `${prfx}set` - Modify Server Analytics configuration",
        help_embed_field4_name: "Important links",
        help_embed_field4_content: "[`Website`](https://discordanalytics.fr) • [`Our Server`](https://discord.gg/g62eVMr) • [`Invite the bot`](https://cutt.ly/regmeY2)",
        help_embed_field4_premium_since: "ServerPremium for",
        help_embed_field4_get_premium: "**» Not yet premium?** *Type s.premium*",
        help_embed_author: "Asked by"
    },

    enable: {
        enable_error_access: "Whoops!** Command access is reserved for Administrators and Managers of Server Analytics.",
        enable_error_not_exist: "The specified activation key does not exist or has already been claimed...",
        enable_error_expired: "The specified activation key has expired and can no longer be used...",
        enable_error_already_claimed: "This server has already activated this command! Use your activation key on another server.",
        enable_error_command_not_exist: "It looks like this command no longer exists or is now public...",
        enable_list_error_no_key: "No activation key has been activated on this server...",
        enable_list_embed_description: "List of commands activated by activation key on this server",
        enable_list_embed_title: "Activated commands on this server",
        enable_list_embed_activated_cmds: "Activated commands:",
        enable_list_embed_activated_cmds_content: "This server has **${x}** activated commands:",
        enable_list_embed_privileges: "Activated privileges:",
        enable_list_embed_privileges_count: "This server has **${x}** activated privileges:",
        enable_list_embed_privileges_empty: "*No activated privileges on this server*",
        enable_premium_success: "**» All set!** You have activated the **ServerPremium** on this server until",
        enable_premium_success_msg: "*All the advantages should be activated in less than **240s***",
        enable_premium_success_alt: "**» All set!** You have extended your **ServerPremium** subscription until",
        enable_privilege_update: "**» All set!** Server Privileges have been updated!",
    },

    forecast: {
        loading_message_prefix: "Loading",
        loading_message_ai: "Initialising the **IA** model and training.",
        loading_messages_maths: "Calculating and generating forecasts...",
        graph_name_ai_process: "Predictive analysis by Artificial Intelligence",
        graph_name_maths_process: "Predictive analysis by using mathematical process",
        forecast_help_title: "Statistic forecast of",
        forecast_help_description: "**Project yourself into the future** using our Artificial Intelligence and statistical analysis.",
        forecast_help_cmd_members_maths: "Member growth forecast",
        forecast_help_cmd_members_ai: "**Artificial Intelligence**\n> *Predictive analysis by IA of member growth on this server.*\n> ⚠ Slow and not precise: not recommended",
        forecast_help_footer_name: "🧪 • Experimental Command"
    },

    set: {
        set_updated_config: "Modified configuration",
        set_lang_list_title: "Change the bot language",
        set_lang_list_description: "Change the bot language by typing `${prfx}set lang [language]`, for example `${prfx}set lang en` to set the server language to English.",
        set_lang_error_wrong_countrycode: "The input language doesn't exist or isn't yet available ! Possible inputs:",
        set_lang_update_embed_title: "Bot language edited !",
        set_lang_update_embed_content: "Commands will now be displayed in",
        set_compare_disabled: "**All rignt!** It's now **impossible** to compare your statistics on other servers. *Retype the command to re-enable the feature.*",
        set_compare_enabled: "**D'accord!** It's once again **possible** to compare your server statistics. *Retype the command to disable the feature.*",
        set_help_embed_title: "Configuration of ${botName}",
        set_help_embed_allowCompare: "Allow/deny other servers to compare your statistics",
        set_help_embed_hoverColor: "Change the background colour when hovering over the server on our website",
        set_help_embed_lang: "Change the language of Server Analytics. (Passer en français)"
    },

    stats: {
        stats_error_compare_not_exist: "The ID entered is not that of a valid server where Server Analytics is...\n> **How to find the ID ?** https://i.imgur.com/IsSzZ2O.png",
        stats_error_compare_disabled: "Vous essayez de comparer vos statistiques avec un serveur qui n'autorise pas cette fonctionnalité...\n> 💡 **»** *Vous pouvez vous aussi refuser d'être comparé en tapant `${prfx}set allowCompare`.*",
        stats_error_compare_not_member: "Pour des raisons de confidentialité, tu dois être membre du serveur que tu souhaites comparer pour procéder à une comparaison.",
        stats_error_restricted_premium: "Ce tableau statistique est réservé aux serveurs détenant le Server Premium. Pour plus d'infos, tapez ` s.premium `",
        stats_error_restricted_dev: "L'accès à ce tableau statistique a été restreint. Celui-ci est peut-être en maintenance ou en cours de création.. Revenez plus tard !",
        stats_error_no_datas: "Je manque de statistiques ! Laisse-moi juste quelques minutes pour que je commence à relever les statistiques du serveur...",
        stats_error_empty_board: "Le format du tableau statistique est incorrect: Aucune statistique à afficher...",
        stats_error_unknown_method: "La méthode statitique personnalisée entrée sur l'objet n'existe pas, vérifiez la structure du tableau.",
        stats_embed_title: "Tableau Statistique",
        stats_embed_compared_with: "Statistiques comparées avec",
        stats_embed_compare_instr: "Comparez avec un autre serveur",
        stats_embed_content_chart_timerange: "Ces 6 derniers jours",
        stats_embed_content_empty_logs: "Vous n'avez rejoint aucun vocal ces 31 derniers jours.",
        stats_embed_chart_default_name: "Graphique sur les Messages Envoyés",
        stats_embed_footer: "Généré en",
        stats_help_embed_title: "Panneaux Statistiques de ${guildName}",
        stats_help_embed_description: "**Consultez vos statistiques** et celles du serveur à l'aide des panneaux standards et personnalisés.",
        stats_help_embed_field_your_boards: "Vos panneaux statistiques",
        stats_help_embed_field_your_boards_empty: "**Whoops !** Il n'est pas encore possible de créer ses propres tableaux statistiques.. Reviens plus tard !",
        stats_help_embed_footer: "Commande expérimentale",

        // Standard stat board "messages" 
        stats_board_messages_category1: "Messages Sents",
        stats_board_messages_category2: "Mentions and Activity",
        stats_board_messages_category3: "Deleted and average",
        stats_board_messages_category1_subcategory1: "✉ • Message Sents:",
        stats_board_messages_category1_displayedText: "\n> **Vous »**", // You sent » (x messages)
        stats_board_messages_category1_subcategory2: "📊 • Graphic:",
        stats_board_messages_category2_subcategory1: "📌 • Mentions:",
        stats_board_messages_category2_subcategory2: "👥 • Active Members:",
        stats_board_messages_category3_subcategory1: "🗑 • Deleted:",
        stats_board_messages_category3_subcategory1_unitName: "supprimés",
        stats_board_messages_category3_subcategory2: "📋 • On average:",
        stats_board_messages_category3_subcategory2_displayedText: "> `{%a%}` messages/**month**\n> `{%b%}` messages/**day**\n> `{%d%}` messages/**hour**\n> `{%c%}` messages/**member**",

        // Standard stat board "members"
        stats_board_members_category1: "Total Members",
        stats_board_members_category2: "Leave and Join",
        stats_board_members_category3: "Graphic",
        stats_board_members_category1_subcategory1: "👥 • Evolution:",
        stats_board_members_category1_subcategory1_displayedText: "> Members",
        stats_board_members_category1_subcategory1_unitName: "members",
        stats_board_members_category1_subcategory2: "📋 • On average:",
        stats_board_members_category1_subcategory2_displayedText: "*New members:*\n> `+ {%a%}` members/**month**\n> `+ {%b%}` members/**day**\n> `+ {%d%}` members/**hour**",
        stats_board_members_category2_subcategory1: "<:le:807632343497703454> • :",
        stats_board_members_category2_subcategory1_unitName: "join",
        stats_board_members_category2_subcategory2: "<:j_:807632343207772190> • Leave:",
        stats_board_members_category2_subcategory2_unitName: "leave",
        stats_board_members_category3_subcategory1: "📈 • Join:",
        stats_board_members_category3_subcategory2: "📉 • Leave:",

        // Standard stat board "voice"
        stats_board_voice_category1: "Voice Stats",
        stats_board_voice_category2: "Your Voices Stats",
        stats_board_voice_category3: "Voice Sessions",
        stats_board_voice_category1_subcategory1: "🔊 • Time elapsed:",
        stats_board_voice_category1_subcategory1_displayText: "\n> **You »** ",
        stats_board_voice_category1_subcategory2: "📊 • Graphic:",
        stats_board_voice_category2_subcategory1: "👥 • Time spent in voice:",
        stats_board_voice_category2_subcategory2: "📊 • Graphic:",
        stats_board_voice_category3_subcategory1: "📚 • Your last vocals:",

    },

    invite: {
        invite_message_title: "Add ${botName}",
        invite_message_add_bot: "Add the bot",
        invite_message_dashboard: "Dashboard",
        invite_message_discord_server: "Support server"
    },

    graph: {
        graph_error_no_datas: "Je n'ai pas assez de statistiques pour créer un graphique... Reviens plus tard :(",
        graph_error_low_timerange: "Il n'est pas encore possible d'afficher des graphiques sur une période inférieure à **6 jours**",
        graph_error_high_timerange: "Il n'est pas encore possible d'afficher des graphiques sur une période suppérieure à **9999 jours**",
        graph_error_premium_timerange: "Seuls les serveurs avec un abonnement premium peuvent afficher des graphiques sur plus de **31 jours**!",
        graph_help_embed_title: "Générer un graphique",
        graph_help_embed_content: "Affichez un graphique sur **${x}** jours:",
        graph_help_embed_available_graphs: "Graphiques disponibles",

        // Do not edit "type", "columnName", "format" and "normalizeFactor" proprieties!
        graph_list: {
            messages: {
                type: "guild",
                graphName: "Graphique sur les Messages Envoyés",
                graphDescription: "Graphique sur les messages envoyés sur ce serveur.",
                columnName: "messages"
            },
            members: {
                type: "guild",
                graphName: "Graphique sur l'évolution du nombre de Membres",
                graphDescription: "Graphique sur l'évolution du nombre de membres dans ce serveur.",
                columnName: "membres",
                processMethod: "set"
            },
            mentions: {
                type: "guild",
                graphName: "Graphique sur le Nombre de Mentions",
                graphDescription: "Graphique sur le nombre de mentions envoyées dans ce serveur.",
                columnName: "mentions"
            },
            myMessages: {
                type: "user",
                graphName: "Graphique du Nombre de Messages",
                graphDescription: "Graphique sur le nombre de messages que vous avez envoyé sur ce serveur.",
                columnName: "messages"
            },
            voiceTime: {
                type: "guild",
                graphName: "Graphique sur le temps passé en vocal",
                graphDescription: "Graphique sur le temps passé en vocal sur ce serveur.",
                columnName: "voice_time",
                format: "time",
                normalizeFactor: 1000
            }
        }
    },
}
