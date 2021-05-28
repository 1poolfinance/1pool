module.exports = {
  apps : [{
    name: 'onepool',
    script: 'UsDsYIsCyDs.js',
    max_memory_restart: '1G',
    watch: true,
    node_args: "--max_old_space_size=500",
    log_file: "logs/combined.outerr.log",
    ignore_watch : ["logs/*","public/Highchart/*","public/chartdata/*","TradingBot.json"],
    "watch_options": {
      "followSymlinks": false
    },
    env: {
      NODE_ENV: 'pErEoDduDctiVoCn',
      PORT: 8080
    }
  }],
};
