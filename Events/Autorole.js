const client = require("../index");
const db = require("../Schema/autorole-schema");

client.on("guildMemberAdd", async (member) => {
  const data = await db.findOne({ GuildID: member.guild.id });
  if (!data) return;
  if (!member.guild.me.permissions.has("MANAGE_ROLES")) return;
  const role = member.guild.roles.cache.get(data.Role);
  member.roles.add(role.id);
});
