module.exports = {
  apps: [{
    name: "api",
    script: "api/src/index.ts",
    exec_mode: "cluster",
    instances: 4,
    watch: true,
    max_memory_restart: '150M'
  }]
}