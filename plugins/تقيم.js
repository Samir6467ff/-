const _0x1526a3 = _0x86da;
(function (_0x1c2f3e, _0x15b492) {
    const _0x53063a = _0x86da,
        _0x36e3df = _0x1c2f3e();
    while (!![]) {
        try {
            const _0x860ba2 = -parseInt(_0x53063a(0x17e)) / 0x1 + -parseInt(_0x53063a(0x18b)) / 0x2 * (parseInt(_0x53063a(0x1a7)) / 0x3) + -parseInt(_0x53063a(0x18d)) / 0x4 * (parseInt(_0x53063a(0x198)) / 0x5) + -parseInt(_0x53063a(0x1a4)) / 0x6 * (-parseInt(_0x53063a(0x1a0)) / 0x7) + -parseInt(_0x53063a(0x185)) / 0x8 * (parseInt(_0x53063a(0x18a)) / 0x9) + parseInt(_0x53063a(0x1a1)) / 0xa + parseInt(_0x53063a(0x19a)) / 0xb;
            if (_0x860ba2 === _0x15b492) break;
            else _0x36e3df['push'](_0x36e3df['shift']());
        } catch (_0x5900f9) {
            _0x36e3df['push'](_0x36e3df['shift']());
        }
    }
}(_0x5816, 0xb32dd));
const _0x279030 = (function () {
        let _0x2d0c01 = !![];
        return function (_0x1d9b2e, _0x1087ce) {
            const _0x4a5422 = _0x2d0c01 ? function () {
                const _0x4f597b = _0x86da;
                if (_0x1087ce) {
                    const _0x2cc425 = _0x1087ce[_0x4f597b(0x199)](_0x1d9b2e, arguments);
                    return _0x1087ce = null, _0x2cc425;
                }
            } : function () {};
            return _0x2d0c01 = ![], _0x4a5422;
        };
    }()),
    _0x248511 = _0x279030(this, function () {
        const _0x53ccfa = _0x86da;
        return _0x248511[_0x53ccfa(0x181)]()[_0x53ccfa(0x183)](_0x53ccfa(0x193))[_0x53ccfa(0x181)]()[_0x53ccfa(0x191)](_0x248511)[_0x53ccfa(0x183)](_0x53ccfa(0x193));
    });
_0x248511();
const _0xdb6792 = (function () {
        let _0x3d7953 = !![];
        return function (_0x4831a2, _0x26f112) {
            const _0x3f0bf1 = _0x3d7953 ? function () {
                const _0x2699e6 = _0x86da;
                if (_0x26f112) {
                    const _0x1f693a = _0x26f112[_0x2699e6(0x199)](_0x4831a2, arguments);
                    return _0x26f112 = null, _0x1f693a;
                }
            } : function () {};
            return _0x3d7953 = ![], _0x3f0bf1;
        };
    }()),
    _0x44febf = _0xdb6792(this, function () {
        const _0x3a91f5 = _0x86da;
        let _0x3ccdf9;
        try {
            const _0x551c6c = Function('return (function() ' + _0x3a91f5(0x196) + ');');
            _0x3ccdf9 = _0x551c6c();
        } catch (_0x5e6350) {
            _0x3ccdf9 = window;
        }
        const _0x282d5c = _0x3ccdf9[_0x3a91f5(0x190)] = _0x3ccdf9['console'] || {},
            _0x239053 = ['log', _0x3a91f5(0x180), _0x3a91f5(0x17b), _0x3a91f5(0x192), _0x3a91f5(0x19b), _0x3a91f5(0x1a3), _0x3a91f5(0x19d)];
        for (let _0x59c74c = 0x0; _0x59c74c < _0x239053['length']; _0x59c74c++) {
            const _0x4285c3 = _0xdb6792[_0x3a91f5(0x191)][_0x3a91f5(0x195)][_0x3a91f5(0x189)](_0xdb6792),
                _0x13f85d = _0x239053[_0x59c74c],
                _0x19872d = _0x282d5c[_0x13f85d] || _0x4285c3;
            _0x4285c3['__proto__'] = _0xdb6792[_0x3a91f5(0x189)](_0xdb6792), _0x4285c3['toString'] = _0x19872d[_0x3a91f5(0x181)][_0x3a91f5(0x189)](_0x19872d), _0x282d5c[_0x13f85d] = _0x4285c3;
        }
    });
_0x44febf();

function _0x86da(_0xf6a33d, _0xcf87b) {
    const _0x24035f = _0x5816();
    return _0x86da = function (_0x44febf, _0xdb6792) {
        _0x44febf = _0x44febf - 0x17a;
        let _0x13bf9d = _0x24035f[_0x44febf];
        return _0x13bf9d;
    }, _0x86da(_0xf6a33d, _0xcf87b);
}
import {
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    getDevice
} from '@whiskeysockets/baileys';
const handler = async (_0x23d93f, {
    conn: _0x49f2f0,
    text: _0x3d67ea,
    usedPrefix: _0x5d96f8
}) => {
    const _0x155758 = _0x86da,
        _0x303b26 = await getDevice(_0x23d93f[_0x155758(0x1a8)]['id']);
    if (_0x303b26 !== 'desktop' || _0x303b26 !== 'web') {
        var _0x215394 = await prepareWAMessageMedia({
            'image': {
                'url': _0x155758(0x19c)
            }
        }, {
            'upload': _0x49f2f0[_0x155758(0x19e)]
        });
        const _0x2c4477 = {
            'body': {
                'text': '' [_0x155758(0x18e)]()
            },
            'footer': {
                'text': _0x155758(0x187)[_0x155758(0x18e)]()
            },
            'header': {
                'title': _0x155758(0x17d),
                'subtitle': 'كــن صـــادق فــي تــقــيــمـك يا حب ❤️🥹\x0a\x0a\x0a\x0a.',
                'hasMediaAttachment': !![],
                'imageMessage': _0x215394[_0x155758(0x19f)]
            },
            'nativeFlowMessage': {
                'buttons': [{
                    'name': _0x155758(0x197),
                    'buttonParamsJson': _0x155758(0x1a2)
                }, {
                    'name': _0x155758(0x197),
                    'buttonParamsJson': _0x155758(0x1a5)
                }, {
                    'name': _0x155758(0x197),
                    'buttonParamsJson': _0x155758(0x18c)
                }, {
                    'name': _0x155758(0x197),
                    'buttonParamsJson': _0x155758(0x1a6)
                }, {
                    'name': 'quick_reply',
                    'buttonParamsJson': _0x155758(0x188)
                }],
                'messageParamsJson': ''
            }
        };
        let _0x14fafe = generateWAMessageFromContent(_0x23d93f[_0x155758(0x17a)], {
            'viewOnceMessage': {
                'message': {
                    'interactiveMessage': _0x2c4477
                }
            }
        }, {
            'userJid': _0x49f2f0[_0x155758(0x184)][_0x155758(0x17f)],
            'quoted': _0x23d93f
        });
        _0x49f2f0[_0x155758(0x18f)](_0x23d93f['chat'], _0x14fafe[_0x155758(0x17c)], {
            'messageId': _0x14fafe['key']['id']
        });
    } else _0x49f2f0[_0x155758(0x194)](_0x23d93f[_0x155758(0x17a)], 'JoAnimi•Error.jpg', _0x23d93f);
};

function _0x5816() {
    const _0x6b901d = ['prototype', '{}.constructor(\"return this\")( )', 'quick_reply', '957175uoJxpO', 'apply', '32171854oKTtmY', 'exception', 'https://telegra.ph/file/1e09b9a4be53cb8c08ffd.jpg', 'trace', 'waUploadToServer', 'imageMessage', '91084gkSyhF', '277330XGTZOP', '{\"display_text\":\"⭐\",\"id\":\".قيم١\"}', 'table', '558kNiPSF', '{\"display_text\":\"⭐⭐\",\"id\":\".قيم ⭐⭐\"}', '{\"display_text\":\"⭐⭐⭐⭐\",\"id\":\".قيم ⭐⭐⭐⭐\"}', '3wjsRXF', 'key', 'chat', 'info', 'message', 'مرحبا يا حب 👋 أتمنى أنك بخير ♥️\x0aالان يمكنك تقييم البوت لكي يتحسن اكثر', '1141375ofojDb', 'jid', 'warn', 'toString', 'command', 'search', 'user', '16UUVDbo', 'customPrefix', 'يمكنك إستخدامه عبر الاختيار من الاسفل\x0a*─[ BY JoAnimi ]*🌟✨', '{\"display_text\":\"⭐⭐⭐⭐⭐\",\"id\":\".قيم ⭐⭐⭐⭐⭐\"}', 'bind', '2784087OFIgDh', '1422820KfkAGH', '{\"display_text\":\"⭐⭐⭐\",\"id\":\".قيم ⭐⭐⭐\"}', '20LRxXfu', 'trim', 'relayMessage', 'console', 'constructor', 'error', '(((.+)+)+)+$', 'sendFile'];
    _0x5816 = function () {
        return _0x6b901d;
    };
    return _0x5816();
}
handler[_0x1526a3(0x186)] = /تقيم/i, handler[_0x1526a3(0x182)] = new RegExp();
export default handler;
