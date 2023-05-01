import http from "node:http";

/**
 * Cat faces obtained from
 * https://github.com/melaniecebula/cat-ascii-faces/tree/master
 */
const CATS = [
  "｡＾･ｪ･＾｡",
  "( ^..^)ﾉ",
  "( =ノωヽ=)",
  "(^-人-^)",
  "(^･o･^)ﾉ”",
  "(^・ω・^ )",
  "(^._.^)ﾉ",
  "(^人^)",
  "(・∀・)",
  "(,,◕　⋏　◕,,)",
  "(.=^・ェ・^=)",
  "(｡･ω･｡)",
  "(⁎˃ᆺ˂)",
  "(=｀ω´=)",
  "(=｀ェ´=)",
  "（=´∇｀=）",
  "(=^ ◡ ^=)",
  "(=^-ω-^=)",
  "(=^･^=)",
  "(=^･ω･^)y＝",
  "(=^･ω･^=)",
  "(=^･ｪ･^=)",
  "(=^‥^=)",
  "(ㅇㅅㅇ❀)",
  "(ノω<。)",
  "＼(=^‥^)/’`",
  "~(=^‥^)/",
  "~(=^‥^)ノ",
  "ヾ(=｀ω´=)ノ”",
  "ヽ(=^･ω･^=)丿",
  "ヾ(=ﾟ･ﾟ=)ﾉ",
  "ㅇㅅㅇ",
  "ミ๏ｖ๏彡",
  "ミ◕ฺｖ◕ฺ彡",
  "=＾● ⋏ ●＾=",
  "=^._.^= ∫",
];

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write(CATS[Math.floor(Math.random() * CATS.length)]);
  res.end("\n\nReach me by hi <at this domain> (PGP 0xEDAF57CA46025B35)");
});

server.listen(3000);
