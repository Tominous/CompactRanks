TriggerRegister.registerChat("MVPPlusPlus").setParameter("contains").setChatCriteria("&6[MVP${color}++${suffix}]").setPriority(Priority.LOWEST);

function MVPPlusPlus(color, suffix, event) {
  var chatMessage = ChatLib.getChatMessage(event, true);
  ChatLib.chat(chatMessage.replace("&6[MVP" + color + "++" + suffix + "]", "&r&6[M" + color + "++&6]"));
  cancel(event);
}