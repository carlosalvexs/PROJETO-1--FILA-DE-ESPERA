let listaDePacientes = []
let continuar = true

while (continuar) {
  let menu = "\nMenu de Consultório:\n"
  menu += "1. Lista de Pacientes\n"
  menu += "2. Novo Paciente\n"
  menu += "3. Consultar Paciente\n"
  menu += "4. Sair\n"
  
  let opcao = prompt(menu)

  if (opcao === "1") {
    if (listaDePacientes.length === 0) {
      prompt("Nenhum paciente na fila.")
    } else {
      let lista = "Pacientes na fila:\n"
      for (let i = 0; i < listaDePacientes.length; i++) {
        lista += `${i + 1}º ${listaDePacientes[i]}\n`
      }
      prompt(lista);
    }
  } else if (opcao === "2") {
    let nome = prompt("Digite o nome do novo paciente:");
    listaDePacientes.push(nome);
    prompt(`${nome} adicionado à fila.`);
  } else if (opcao === "3") {
    if (listaDePacientes.length === 0) {
      prompt("Nenhum paciente para consultar.")
    } else {
      let paciente = listaDePacientes.shift()
      prompt(`Paciente consultado: ${paciente}`)
    }
  } else if (opcao === "4") {
    prompt("Encerrando o programa.")
    continuar = false;
  } else {
    prompt("Opção inválida.")
  }
}
