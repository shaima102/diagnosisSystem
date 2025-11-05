// التمرير بين الصفحات
document.getElementById("scrollDown").onclick = () => {
  document.getElementById("problems").scrollIntoView({ behavior: "smooth" });
};
document.getElementById("scrollDown2").onclick = () => {
  document.getElementById("reasons").scrollIntoView({ behavior: "smooth" });
};
document.getElementById("scrollDown3").onclick = () => {
  document.getElementById("proscons").scrollIntoView({ behavior: "smooth" });
};
