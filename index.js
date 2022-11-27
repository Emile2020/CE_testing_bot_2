(async () => {
    // default imports
    const events = require('events');
    const {
        exec
    } = require("child_process")
    const logs = require("discord-logs")
    const Discord = require("discord.js")
    const {
        MessageEmbed,
        MessageButton,
        MessageActionRow,
        Intents,
        Permissions,
        MessageSelectMenu
    } = require("discord.js")
    const fs = require('fs');
    let process = require('process');
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // block imports
    const os = require("os-utils");
    let URL = require('url')
    const ms = require("ms")
    let canvas = require("discord-canvas")
    let https = require("https")
    const S4D_APP_PKG_axios = require('axios')
    const synchronizeSlashCommands = require('@frostzzone/discord-sync-commands');
    const S4D_WEBSITECREATION_EXPRESS = require('express')
    const S4D_WEBSITECREATION_bodyParser = require('body-parser');
    const S4D_WEBSITECREATION_cors = require('cors');
    var S4D_WEBSITECREATION_path = require('path');
    const S4D_WEBSITECREATION_EXPRESS_app = S4D_WEBSITECREATION_EXPRESS();
    const Database = require("easy-json-database")
    const {
        Configuration,
        OpenAIApi
    } = require("openai");

    // define s4d components (pretty sure 90% of these arnt even used/required)
    let s4d = {
        Discord,
        fire: null,
        joiningMember: null,
        reply: null,
        player: null,
        manager: null,
        Inviter: null,
        message: null,
        notifer: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };

    // check if d.js is v13
    if (!require('./package.json').dependencies['discord.js'].includes("13.")) throw new Error("Seems you arent using v13 please run `npm i discord.js@13.12.0`");

    // check if discord-logs is v2
    if (!require('./package.json').dependencies['discord-logs'].startsWith("^2.")) throw new Error("discord-logs must be 2.0.0. please run `npm i discord-logs@2.0.0`");

    // create a new discord client
    s4d.client = new s4d.Discord.Client({
        intents: [
            Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)
        ],
        partials: [
            "REACTION",
            "CHANNEL"
        ]
    });

    // when the bot is connected say so
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })

    // upon error print "Error!" and the error
    process.on('uncaughtException', function(err) {
        console.log('Error!');
        console.log(err);
    });

    // give the new client to discord-logs
    logs(s4d.client);

    // pre blockly code
    const discordModals = require('discord-modals');
    discordModals(s4d.client);
    const {
        Modal,
        TextInputComponent,
        showModal
    } = require('discord-modals');

    // blockly code
    var user_, random_hint, func_return, Products, arguments2, body, letgo, users, command, loop_shop, loop_list, logs_qotd, object, im_res, embed_description, i, response, embed_description_list, desc_list_all, loop_number_object, random_hint2, j, desc_list, quota_results, letgo2;

    function mathRandomInt(a, b) {
        if (a > b) {
            // Swap a and b to ensure a is smaller.
            var c = a;
            a = b;
            b = c;
        }
        return Math.floor(Math.random() * (b - a + 1) + a);
    }

    function colourRandom() {
        var num = Math.floor(Math.random() * Math.pow(2, 24));
        return '#' + ('00000' + num.toString(16)).substr(-6);
    }

    // Describe this function...
    function rankcard_(user_) {
        console.log('hi');
        func_return = 0;
        return func_return;
    }

    // Describe this function...
    function initialize() {
        Products = database1.get(String('Products'));
        users = database1.get(String('Users'));
    }


    s4d.client.on('ready', async () => {
        random_hint = database1.get(String('hints'));

        while (s4d.client && s4d.client.token) {
            await delay(50);
            loop_shop = (Object.getOwnPropertyNames(Products));
            loop_list = [];
            var embed_eeeeasda = new Discord.MessageEmbed();
            for (i = 1; i <= 6; i++) {
                console.log('test_check');
                loop_number_object = loop_shop.splice((mathRandomInt(1, loop_shop.length) - 1), 1)[0];
                embed_eeeeasda.addField(String(loop_number_object), String(([(Products[String(loop_number_object)])[String('description')], '\n', 'Now available for the price of €', (Products[String(loop_number_object)])[String('price')], '\n'].join(''))), true);
            }
            embed_eeeeasda.setTitle(String('Shop items'))
            embed_eeeeasda.setURL(String());
            embed_eeeeasda.setColor("#ce01ce");
            embed_eeeeasda.setDescription(String('Here are 5 random items! These refresh every 5 minutes. '));
            embed_eeeeasda.setTimestamp(new Date());
            random_hint2 = random_hint[(mathRandomInt(1, random_hint.length) - 1)];
            embed_eeeeasda.setFooter({
                text: String(random_hint2),
                iconURL: String()
            });

            s4d.client.user.setPresence({
                status: "online",
                activities: [{
                    name: ('with Emile | ' + String(random_hint2)),
                    type: "PLAYING"
                }]
            });
            var embed_e = embed_eeeeasda;
            s4d.client.channels.cache.get('1025736757523783761').messages.fetch({
                limit: 1
            }).then(async (last_messages_in_channel) => {
                (last_messages_in_channel.at(1 - 1)).delete()

            });
            s4d.client.channels.cache.get('1025736757523783761').send({
                embeds: [embed_eeeeasda]
            });
            await delay(Number(300) * 1000);

            console.log('ran')
        }

    });

    synchronizeSlashCommands(s4d.client, [{
        name: 'completed',
        description: 'Event was concluded.',
        options: [{
            type: 6,
            name: 'user',
            required: true,
            description: 'The user of the host.',
            choices: [

            ]
        }, ]
    }, {
        name: 'late',
        description: 'Host didn\'t show up and didn\'t notify the overseer.',
        options: [{
            type: 6,
            name: 'user',
            required: true,
            description: 'The user of the host.',
            choices: [

            ]
        }, ]
    }, {
        name: 'lack',
        description: 'Nobody came to the event.',
        options: [{
            type: 6,
            name: 'user',
            required: true,
            description: 'The user of the host.',
            choices: [

            ]
        }, ]
    }, {
        name: 'bal',
        description: 'Check your balance or someone\'s else balance.',
        options: [{
            type: 6,
            name: 'user',
            required: false,
            description: 'Which user do you want to check his/her balance?',
            choices: [

            ]
        }, ]
    }, {
        name: 'createitem',
        description: 'Opens a form for creating your item.',
        options: [

        ]
    }, {
        name: 'admin',
        description: '.',
        options: [{
            type: 2,
            name: 'createitem',

            description: '.',
            options: [

            ]
        }, {
            type: 2,
            name: 'test',

            description: '.',
            options: [

            ]
        }, ]
    }, {
        name: 'help',
        description: 'Get some help',
        options: [

        ]
    }, {
        name: 'rankcard',
        description: 'Get your rank card.',
        options: [{
            type: 6,
            name: 'user',
            required: false,
            description: 'Who do you want to check?',
            choices: [

            ]
        }, ]
    }, ], {
        debug: false,

    });

    await s4d.client.login((process.env[String('token')])).catch((e) => {
        const tokenInvalid = true;
        const tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid bot token was provided!")
        } else {
            throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
        }
    });

    /* IMPORTED - S4D Website Hosting Dependencies */
    let S4D_APP_WEBSITE_HOSTING_PORT = 8080

    S4D_WEBSITECREATION_EXPRESS_app.use(S4D_WEBSITECREATION_cors());
    S4D_WEBSITECREATION_EXPRESS_app.use(S4D_WEBSITECREATION_bodyParser.urlencoded({
        extended: false
    }));
    S4D_WEBSITECREATION_EXPRESS_app.use(S4D_WEBSITECREATION_bodyParser.json());

    S4D_WEBSITECREATION_EXPRESS_app.all('/management/qotd', async function(req, res) {
        body = (req[String('body')]);
        if ((Object.getOwnPropertyNames(body)) == ['user', 'question', 'number']) {
            logs_qotd = api.get(String('qotd'));
            logs_qotd[String((body[String('number')]))] = {
                "user": (body[String('user')]),
                "question": (body[String('question')]),
            }
            api.set(String('qotd'), logs_qotd);
            res.status(Number(200))
            res.send(String('Success'))
        } else {
            res.status(Number(400))
            res.send(String('Bad request.'))
        }

    })
    S4D_WEBSITECREATION_EXPRESS_app.get('/api_logs.json', async function(req, res) {
        res.header("Content-Type", 'application/json')
        res.status(Number(200))
        res.sendFile(S4D_WEBSITECREATION_path.join(__dirname, String('api_logs.json')))

    })
    S4D_WEBSITECREATION_EXPRESS_app.get('/', async function(req, res) {
        res.send(String('Hey!'))

    })


    S4D_WEBSITECREATION_EXPRESS_app.listen(S4D_APP_WEBSITE_HOSTING_PORT);
    const api = new Database('./api_logs.json')
    const database1 = new Database('./database.json')
    s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
        if ((interaction.commandName) == 'bal') {
            console.log('ded');
            if ((interaction.options.getUser('user')) == null) {
                if (!(null == (users[String(((interaction.member.user).id))]))) {
                    await interaction.reply({
                        embeds: [{
                            title: String('Your balance.'),
                            description: String(['Your current balance is € ', (users[String(((interaction.member.user).id))])[String('Balance')], '.'].join('')),
                        }],
                        ephemeral: false,
                        components: []
                    });
                } else {
                    await interaction.reply({
                        content: 'This user is not registered in the database yet. We are fixing this now.',
                        ephemeral: true,
                        components: []
                    });
                    users[String((letgo.id))] = {
                        "tag": (letgo.tag),
                        "Balance": 0,
                        "Inventory": [],
                    }
                    database1.set(String('Users'), users);
                }
            } else {
                letgo = (interaction.options.getUser('user'));
                if (!(null == (users[String((letgo.id))]))) {
                    await interaction.reply({
                        embeds: [{
                            title: String('Their ballance'),
                            description: String(['Their current balance is € ', (users[String((letgo.id))])[String('Balance')], '.'].join('')),
                        }],
                        ephemeral: false,
                        components: []
                    });
                } else {
                    await interaction.reply({
                        content: 'This user is not registered in the database yet. We are fixing this now.',
                        ephemeral: true,
                        components: []
                    });
                    users[String((letgo.id))] = {
                        "tag": (letgo.tag),
                        "Balance": 0,
                        "Inventory": [],
                    }
                    database1.set(String('Users'), users);
                }
            }
        } else if ((interaction.commandName) == 'createitem') {
            let createitem = new Modal()
                .setCustomId('ci')
                .setTitle('Create item.')
                .addComponents(
                    new TextInputComponent()
                    .setCustomId('ci_name')
                    .setLabel('Name of the product. (no spaces allowed)')
                    .setStyle(('SHORT'))
                    .setMinLength()
                    .setMaxLength()
                    .setRequired(true)
                    .setPlaceholder('Item'),
                    new TextInputComponent()
                    .setCustomId('ci_price')
                    .setLabel('Price of the product (numbers only)')
                    .setStyle(('SHORT'))
                    .setMinLength()
                    .setMaxLength()
                    .setRequired(true)
                    .setPlaceholder('0'),
                    new TextInputComponent()
                    .setCustomId('ci_stock')
                    .setLabel('How much stock (numbers only)')
                    .setStyle(('SHORT'))
                    .setMinLength()
                    .setMaxLength()
                    .setRequired(true)
                    .setPlaceholder('0'),
                    new TextInputComponent()
                    .setCustomId('ci_description')
                    .setLabel('Description of the item.')
                    .setStyle(('LONG'))
                    .setMinLength()
                    .setMaxLength()
                    .setRequired(true)
                    .setPlaceholder('cool description'),
                    new TextInputComponent()
                    .setCustomId('ci_reply')
                    .setLabel('The message send by the bot when bought.')
                    .setStyle(('LONG'))
                    .setMinLength()
                    .setMaxLength()
                    .setRequired(true)
                    .setPlaceholder('Thanks for using my item!'),
                );
            showModal(createitem, {
                client: s4d.client,
                interaction: interaction
            })
        } else if ((interaction.commandName) == 'help') {
            await interaction.reply({
                embeds: [{
                    color: String(colourRandom()),
                    title: String('Help'),
                    description: String('Here are some slash commands'),
                    fields: [{
                            name: '/bal',
                            value: 'Shows your current ballance',
                            inline: true,
                        },

                    ],
                }],
                ephemeral: false,
                components: []
            });
        } else if ((interaction.commandName) == 'completed') {
            letgo = (interaction.options.getUser('user'));
            console.log(users);
            (users[String((letgo.id))])[String('Balance')] = (((users[String((letgo.id))])[String('Balance')]) + 100)
            (users[String(((interaction.member.user).id))])[String('Balance')] = (((users[String(((interaction.member.user).id))])[String('Balance')]) + 50)
            database1.set(String('Users'), users);
            await interaction.reply({
                content: 'interaction completed',
                ephemeral: true,
                components: []
            });
        } else if ((interaction.commandName) == 'late') {
            letgo = (interaction.options.getUser('user'));
            (users[String((letgo.id))])[String('Balance')] = (((users[String((letgo.id))])[String('Balance')]) - 25)
            database1.set(String('Users'), users);
            await interaction.reply({
                content: 'interaction completed',
                ephemeral: true,
                components: []
            });
        } else if ((interaction.commandName) == 'rankcard') {
            if ((interaction.options.getMember('user')) == null) {
                user_ = (interaction.member.user);
                if ((interaction.member)._roles.includes(((interaction.guild).roles.cache.get('982090008821387294')).id)) {
                    object = (await new canvas.RankCard().setUsername((user_.username)).setAvatar((user_.displayAvatarURL({
                        format: "png"
                    }))).setRankName((((interaction.member).roles.highest).name)).setAddon("Reputation", false).setAddon("Rank", false).setAddon("Badges", true).setBackground('https://media.discordapp.net/attachments/937025700601430016/1040595246813302784/CE_rankcard2.png').setOpacity("Avatar", 0).setBadge(6, "gold").toAttachment());
                } else {
                    object = (await new canvas.RankCard().setUsername((user_.username)).setAvatar((user_.displayAvatarURL({
                        format: "png"
                    }))).setRankName((((interaction.member).roles.highest).name)).setAddon("Reputation", false).setAddon("Rank", false).setAddon("Badges", true).setBackground('https://media.discordapp.net/attachments/937025700601430016/1040595246813302784/CE_rankcard2.png').setOpacity("Avatar", 0).toAttachment());
                }
            } else {
                user_ = (interaction.options.getMember('user'));
                if ((interaction.options.getMember('user'))._roles.includes(((interaction.guild).roles.cache.get('982090008821387294')).id)) {
                    object = (await new canvas.RankCard().setUsername((user_.username)).setAvatar((user_.displayAvatarURL({
                        format: "png"
                    }))).setRankName((((interaction.options.getMember('user')).roles.highest).name)).setAddon("Reputation", false).setAddon("Rank", false).setBackground('https://media.discordapp.net/attachments/937025700601430016/1040595246813302784/CE_rankcard2.png').setOpacity("Avatar", 0).setBadge(6, "gold").toAttachment());
                } else {
                    object = (await new canvas.RankCard().setUsername((user_.username)).setAvatar((user_.displayAvatarURL({
                        format: "png"
                    }))).setRankName((((interaction.options.getMember('user')).roles.highest).name)).setAddon("Reputation", false).setAddon("Rank", false).setBackground('https://media.discordapp.net/attachments/937025700601430016/1040595246813302784/CE_rankcard2.png').setOpacity("Avatar", 0).toAttachment());
                }
            }
            interaction.reply({
                content: 'Hi',
                files: [{
                    attachment: object.toBuffer()
                }]
            });
        } else if ((interaction.commandName) == 'lack') {
            letgo = (interaction.options.getUser('user'));
            (users[String((letgo.id))])[String('Balance')] = (((users[String((letgo.id))])[String('Balance')]) + 10)
            database1.set(String('Users'), users);
            await interaction.reply({
                content: 'interaction completed',
                ephemeral: true,
                components: []
            });
        }

    });

    s4d.client.on('ready', async () => {
        initialize();

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        arguments2 = (s4dmessage.content).split(' ');
        command = arguments2.splice(0, 1)[0];
        loop_shop = (Object.getOwnPropertyNames(Products));
        if ((command || '').startsWith('?shop' || '')) {
            s4dmessage.reply({
                content: String('N/A'),
                allowedMentions: {
                    repliedUser: true
                }
            });
        } else if ((command || '').startsWith('?buy' || '')) {
            console.log((arguments2[0]));
            if ((Object.getOwnPropertyNames(Products)).includes((arguments2[0]))) {
                console.log((arguments2[0]));
                if (!(null == (users[String(((s4dmessage.author).id))]))) {
                    console.log((arguments2[0]));
                    if (((Products[String((arguments2[0]))])[String('price')]) <= ((users[String(((s4dmessage.author).id))])[String('Balance')])) {
                        console.log((arguments2[0]));
                        if (null != ((Products[String((arguments2[0]))])[String('stock _left')])) {
                            if (1 <= ((Products[String((arguments2[0]))])[String('stock_left')])) {
                                ((users[String(((s4dmessage.author).id))])[String('Inventory')]).push(arguments2[0]);
                                var i_list = ((Products[String((arguments2[0]))])[String('roles_added')]);
                                for (var i_index in i_list) {
                                    i = i_list[i_index];
                                    console.log(i);
                                    console.log(((s4dmessage.guild).roles.cache.get((String(i)))));
                                    (s4dmessage.member).roles.add(((s4dmessage.guild).roles.cache.get((String(i)))));
                                }
                                (Products[String((arguments2[0]))])[String('stock_left')] = (((Products[String((arguments2[0]))])[String('stock_left')]) - 1)
                                if (((Products[String((arguments2[0]))])[String('use_reply')]) != null) {
                                    s4dmessage.reply({
                                        content: String((String((Products[String((arguments2[0]))])[String('use_reply')]))),
                                        allowedMentions: {
                                            repliedUser: true
                                        }
                                    });
                                }
                                if (((Products[String((arguments2[0]))])[String('owner')]) != null) {
                                    (users[String(((s4dmessage.author).id))])[String('Balance')] = (((users[String(((Products[String((arguments2[0]))])[String('owner')]))])[String('Balance')]) + ((Products[String((arguments2[0]))])[String('price')]))
                                }
                                (users[String(((s4dmessage.author).id))])[String('Balance')] = (((users[String(((s4dmessage.author).id))])[String('Balance')]) - ((Products[String((arguments2[0]))])[String('price')]))
                                database1.set(String('Users'), users);
                                database1.set(String('products'), Products);
                            } else {
                                s4dmessage.reply({
                                    content: String('There is no stock left.'),
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                });
                            }
                        } else {
                            ((users[String(((s4dmessage.author).id))])[String('Inventory')]).push(arguments2[0]);
                            var i_list2 = ((Products[String((arguments2[0]))])[String('roles_added')]);
                            for (var i_index2 in i_list2) {
                                i = i_list2[i_index2];
                                console.log(i);
                                console.log(((s4dmessage.guild).roles.cache.get((String(i)))));
                                (s4dmessage.member).roles.add(((s4dmessage.guild).roles.cache.get((String(i)))));
                            }
                            if (((Products[String((arguments2[0]))])[String('use_reply')]) != null) {
                                s4dmessage.reply({
                                    content: String((String((Products[String((arguments2[0]))])[String('use_reply')]))),
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                });
                            }
                            if (((Products[String((arguments2[0]))])[String('owner')]) != null) {
                                (users[String(((s4dmessage.author).id))])[String('Balance')] = (((users[String(((Products[String((arguments2[0]))])[String('owner')]))])[String('Balance')]) + ((Products[String((arguments2[0]))])[String('price')]))
                            }
                            (users[String(((s4dmessage.author).id))])[String('Balance')] = (((users[String(((s4dmessage.author).id))])[String('Balance')]) - ((Products[String((arguments2[0]))])[String('price')]))
                            database1.set(String('Users'), users);
                        }
                    }
                } else {
                    s4dmessage.channel.send({
                        content: String('You dont have enough money.')
                    });
                }
            }
        } else if ((command || '').startsWith('?restock' || '')) {
            if (false) {}
        } else if ((command || '').startsWith('?get-sunday' || '')) {
            S4D_APP_PKG_axios({
                    method: "get",
                    url: (['https://api.trello.com/1/lists/62d997829cff2d5849ceb12f/cards?key=', process.env[String('trello_key')], '&token=', process.env[String('trello_token')]].join('')),

                    headers: {
                        'content-type': 'application/json',

                    },

                })
                .then(async (response) => {
                    response = (response.data);
                    desc_list_all = [];
                    for (var j_index in response) {
                        j = response[j_index];
                        if (!(j[String('closed')])) {
                            if (String(j[String('desc')]) != '') {
                                desc_list = (j[String('desc')]).split('\n');
                                desc_list_all.push(desc_list);
                            }
                        }
                    }
                    console.log(desc_list_all);

                })
                .catch(async (err) => {
                    console.log((err));

                });
        } else if ((command || '').startsWith('?generate-image' || '')) {
            im_res = (await openai.createImage({
                prompt: "(String((s4dmessage.content)).replaceAll('?generate-image ', String('')))",
                n: 1,
                size: "256x256",
                response_format: "b64_json"
            }).then((response) => {
                const imageb64 = response.data.data[0].b64_json;
                const image = Buffer.from(imageb64, "base64");
                return image;
            }));
            const attachment = new Discord.MessageAttachment(im_res, im_res)
                (s4dmessage.channel).send({
                    content: (['Image result of prompt: `', String((s4dmessage.content)).replaceAll('?generate-image ', String('')), '`'].join('')),
                    files: [attachment]
                })
        }

    });


    const configuration = new Configuration({
        apiKey: (process.env[String('openai')]),
    });
    const openai = new OpenAIApi(configuration);

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.author.bot) {
            return;
        }
        (users[String(((s4dmessage.author).id))])[String('Balance')] = (((users[String(((s4dmessage.author).id))])[String('Balance')]) + 1)
        database1.set(String('Users'), users);
        if ((String((s4dmessage.content)).includes(String('https://docs.google.com/spreadsheets/d/1LhntBes7XevS5ASYS_ZFpiYgJKv_Y76QX6aEjf5S8oQ/edit#gid=0'))) && (((s4dmessage.content) || '').startsWith('Quota Results! ' || ''))) {
            await delay(Number(2) * 1000);
            embed_description = (String((s4dmessage).embeds[0].description));
            embed_description_list = embed_description.split('\n');
            embed_description_list.splice(0, 1);
            embed_description_list.splice(0, 1);
            embed_description_list.splice(0, 1);
            embed_description_list.splice(0, 1);
            console.log(embed_description_list);
            quota_results = (new Object());
            users = database1.get(String('Users'));
            for (var j_index2 in embed_description_list) {
                j = embed_description_list[j_index2];
                console.log(j);
                i = j.split(',');
                console.log(i);
                if (i[1] == 'Passed') {
                    quota_results[String((i[0]))] = true
                } else {
                    quota_results[String((i[0]))] = false
                }
            }
            console.log((JSON.stringify(quota_results)));
            var i_list3 = (Object.getOwnPropertyNames(quota_results));
            for (var i_index3 in i_list3) {
                i = i_list3[i_index3];
                letgo = (users[String(i)]);
                if ((letgo[String('Quota_completed')]) == null) {
                    letgo[String('Quota_completed')] = 0
                }
                if ((quota_results[String(i)]) == true) {
                    letgo2 = (letgo[String('Quota_completed')]);
                    letgo2 = (typeof letgo2 === 'number' ? letgo2 : 0) + 1;
                    letgo[String('Quota_completed')] = letgo2
                }
                users[String(i)] = letgo
            }
            database1.set(String('Users'), users);
        }

    });

    s4d.client.on('modalSubmit', async (i) => {
        let member = i.guild.members.cache.get(i.member.user.id)
        if (((i.customId)) == 'ci') {
            if (String(((i.getTextInputValue('ci_name')))).includes(String(' '))) {
                await i.reply({
                    content: String('Spaces detected.'),
                    ephemeral: false
                })
            } else {
                Products[String(((i.getTextInputValue('ci_name'))))] = {
                    "name": ((i.getTextInputValue('ci_name'))),
                    "stock_left": ((i.getTextInputValue('ci_stock'))),
                    "description": ((i.getTextInputValue('ci_description'))),
                    "use_reply": ((i.getTextInputValue('ci_reply'))),
                    "roles_added": [],
                }
                await i.reply({
                    content: String('Succes!'),
                    ephemeral: false
                });
                database1.set(String('Products'), Products);
                if ((i.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
                    console.log('e');
                } else {
                    (s4dmessage.member).roles.remove((((i.guild)).roles.cache.get('1025413696110993488')));
                }
            }
        }

    });

    return s4d
})();
