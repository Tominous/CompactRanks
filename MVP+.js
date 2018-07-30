TriggerRegister.registerChat("MVPPlus").setParameter("contains").setChatCriteria("&b[MVP${color}+${suffix}]").setPriority(Priority.LOWEST);

function MVPPlus(color, suffix, event) {
  var chatMessage = ChatLib.getChatMessage(event, true);
  ChatLib.chat(chatMessage.replace("&b[MVP" + color + "+" + suffix + "]", "&r&b[M" + color + "+&b]"));
  cancel(event);
}