// Función para cambiar de pestañas en el código del cliente
function switchTab(tab) {
  document.getElementById("content-cl1").classList.add("hidden");
  document.getElementById("content-form1").classList.add("hidden");
  document.getElementById("tab-cl1").classList.remove("active");
  document.getElementById("tab-form1").classList.remove("Factive");

  if (tab === "cl1") {
    document.getElementById("content-cl1").classList.remove("hidden");
    document.getElementById("tab-cl1").classList.add("active");
  } else {
    document.getElementById("content-form1").classList.remove("hidden");
    document.getElementById("tab-form1").classList.add("active");
  }
}

// Lógica de la simulación visual
function simularEnvio() {
  const val = document.getElementById("simInput").value;
  const simData = document.getElementById("simData");
  const simStatus = document.getElementById("simStatus");
  const simConsole = document.getElementById("simConsole");

  simStatus.innerText = "Transmitiendo Bytes ASCII...";
  simData.classList.remove("hidden");
  simData.classList.add("animate-pulse");

  setTimeout(() => {
    simStatus.innerText = "¡Mensaje recibido en Servidor!";
    simData.classList.add("hidden");

    const newLog = document.createElement("div");
    newLog.className = "text-purple-300";
    newLog.innerText = `> ${val}`;
    simConsole.appendChild(newLog);
    simConsole.scrollTop = simConsole.scrollHeight;
  }, 1000);
}


