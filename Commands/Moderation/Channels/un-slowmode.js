module.exports = {
    commands: ["un-slowmode", "unslowmode"],
    permissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
    permissionError: "You do not have permissions to use the un-slowmode command!",
    cooldown: 2,
    run: async (message) => {
            message.channel.setRateLimitPerUser(0);
            return message.channel.send('The slow mode has been removed!')
    }
}