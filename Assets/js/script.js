var usuario;
var quartos = [];
var hospedes = [];
var confreserva;


function usuario() {

    alert("Bem vindo ao Hotel Dorme Que Passa");
    usuario = prompt("Informe o nome de usuário: ");
    inicio();
}


function inicio() {
    
    senha = parseInt(prompt("Informe a senha de acesso: "));

    if (senha === 2678) {

        alert("Bem vindo ao Hotel Dorme Que Passa, " + usuario + " é um imenso prazer ter você aqui!")

        var escolha = parseInt(prompt('Selecione uma opção \n1.) Reserva de Quartos \n2.) Cadastro de Hóspedes \n3.) Abastecimento de Carros \n4.) Cadastro de eventos \n5.) Ar Puro \n6.) Sair'));

        switch (escolha) {
            case 1:
                reserva_quartos();
                break;
            case 2:
                cadastro_hospedes();
                break;
            case 3:
                abastecer_carros();
                break;
            case 4:
                cadastro_eventos();
                break;
            case 5:
                arpuro();
                break;
            case 6:
                sair();
            default:
                erro();
        }
    }

    else {
        alert("Senha incorreta, tente novamente!");
        inicio();
    }
}		

function reserva_quartos() {

    alert('HOTEL DORME QUE PASSA - RESERVA DE QUARTOS');

    var diaria = parseFloat(prompt("Informe o valor padrão da diária: "));

    var dias = parseInt(prompt("Informe a quantidade de dias de hospedagem: "));

    if (isNaN(diaria) || isNaN(dias) || diaria < 1 || dias < 1 || dias > 30) {

        alert("Valor inválido " + usuario + ", realize a reserva novamente");
        reserva_quartos();

    }
    else {

        var total = diaria * dias;
        alert("HOTEL DORME QUE PASSA - RESERVA DE QUARTOS \nValor total para " + dias + " dias de hospedagem: R$ " + total);

    }

    var hospede = prompt("Informe o nome e sobrenome do hóspede: ");

    var continuar = true;

    var numquarto = parseInt(prompt("Qual o quarto para reserva? (1-20)"));

    while (numquarto < 1 || numquarto > 20) {

        alert("Opção inválida. Insira o número do quarto entre 1 e 20")
        numquarto = parseInt(prompt("Qual o quarto para reserva? (1-20)"));

    }

    while (continuar) {

        if (quartos.includes(numquarto)) {
            alert("Quarto indisponível. Escolha outro.");
            numquarto = parseInt(prompt("Qual o quarto para reserva? (1-20)"));
        }
        else {
    
            alert("Quarto " + numquarto + " está disponível")
            continuar = false;
        }
    }

    confreserva = confirm(usuario + ", você confirma a hospedagem de " + hospede + " por " + dias + " dias, para o quarto " + numquarto + " no valor de R$ " + total + "?" )

    if (confreserva) {

        quartos.push(numquarto);
        alert("HOTEL DORME QUE PASSA - RESERVA CONFIRMADA\n" +
        "Hóspede: " + hospede + "\n" +
        "Dias de hospedagem: " + dias + "\n" +
        "Valor da diária: R$ " + diaria + "\n" +
        "Quarto reservado: " + numquarto + "\n" +
        "Total a pagar: R$ " + total)
        
    }
    else {
        alert("HOTEL DORME QUE PASSA - CONFIRMAÇÃO NEGADA\n" +
        "A reserva do quarto não foi confirmada por desistência")
    }

    inicio();
    
}

function cadastro_hospedes() {

    var cliente;
    var idade;

    alert('HOTEL DORME QUE PASSA - CADASTRO DE HÓSPEDES');

    var escolhahospede = parseInt(prompt("Selecione uma opção: \n1.) Cadastrar \n2.) Pesquisar \n3.) Listar \n4.) Sair" ))

    switch (escolhahospede) {
        case 1:
            cadhosp();
            break;
        case 2:
            pesqhosp();
            break;
        case 3:
            listhosp();
            break;
        case 4:
            inicio();
            break;
        default:
            erro();
    }

    function cadhosp() {

        var diaria = parseInt(prompt("Qual o valor padrão da diária?"));
        var meia = 0;
        var gratuidade = 0;
        var totaldiaria = 0;

        var contin = true;

        while (contin) {

            cliente = prompt("Informe nome e sobrenome do Hóspede: ");

            if (cliente === "PARE") {
                contin = false;
            }
            else {

                if (!isNaN(cliente)) {
                    alert("Informe um nome válido");
                    cadhosp();
                }

                idade = parseInt(prompt("Qual a idade da(o) " + cliente + "?"));

                if (idade <= 0 || isNaN(idade)) {
                    alert("Insira uma idade válida para o hóspede");
                    idade = parseInt(prompt("Qual a idade da(o) " + cliente + "?"));
                }
                else if (idade < 6) {
                    alert(cliente + " foi cadastrado com sucesso, " + cliente + " possui gratuidade!");
                    gratuidade++;
                }
                else if (idade > 60) {
                    alert(cliente + " foi cadastrado com sucesso, " + cliente + " paga meia!");
                    meia++;
                    totaldiaria += (diaria/2);
                }
                else {
                    alert(cliente + " foi cadastrado com sucesso!");
                    totaldiaria += diaria;
                }

                hospedes.push(cliente);
            }
        }
        
        
        alert(usuario + " o valor total das hospedagens é: " + totaldiaria + "; " + gratuidade + " hóspede(s) possui gratuidade; " + meia + " hóspede(s) paga meia.");

        cadastro_hospedes();
    }

    function pesqhosp() {

        cliente = prompt("Informe o nome e sobrenome do hóspede: ");

        if (!isNaN(cliente)) {
            alert("Informe um nome válido");
            pesqhosp();
        }
        else if (hospedes.includes(cliente)) {
            alert(cliente + ' está cadastrada(o)!')
        }
        else {
            alert(+ cliente + ' não foi encontrado em nossos dados.')
        }

        cadastro_hospedes();
    }

    function listhosp() {

        if (hospedes.length == 0) {
            alert("Não há hospedes cadastrados.");
            inicio();
        }
        else {
            alert("LISTA DE HÓSPEDES CADASTRADOS \n \n" + hospedes.join('\n'));
            cadastro_hospedes();
        }

    }
}

function abastecer_carros() {

    alert('HOTEL DORME QUE PASSA - ABASTECIMENTO DE VEÍCULOS');

            var alcool30porcento = 0.7
            var tanquecombustivel = 42
            
            var alcoolwayne = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"))
            var gasolinawayne = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"))

            var alcoolstark = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"))
            var gasolinastark = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"))

            if(alcoolwayne < alcoolstark){
              alert("O alcool do posto Wayne Oil está mais barato")
            }
            else {alcoolstark < alcoolwayne
              alert("O alcool do posto Stark Petrol está mais barato")
            }
            if(gasolinawayne < gasolinastark){
              alert("A gasolina do posto Wayne Oil está mais barato")
            }
            else {gasolinastark < gasolinawayne
              alert("A gasolina do posto Stark Petrol está mais barato")
            }
            
    inicio();
}

function cadastro_eventos() {
    alert('HOTEL DORME QUE PASSA - CADASTRO DE EVENTOS');

    var convidados = parseInt(prompt("Informe a quantidade de convidados do evento: "))

			if (convidados > 350 || convidados < 0) {
				alert("Quantidade de convidados superior à capacidade máxima.")
				eventos();
			} else {
				var duracao = parseInt(prompt("Informe a duração do evento em horas: "));

				if (isNaN(duracao) || duracao < 1) {
					alert("Duração do evento inválida. Por favor, informe um valor inteiro maior que zero.")
					eventos()
				} else {
					var auditorioLaranja = {
						nome: "Auditorio Laranja",
						capacidade: 150,
						cadeirasAdd: 70
					}

					var auditorioColorado = {
						nome: 'Auditorio Colorado',
						capacidade: 350,
						cadeirasAdd: 0
					}

					var auditorioAdequado
					var cadeirasAdd

					if (convidados <= auditorioLaranja.capacidade + auditorioLaranja.cadeirasAdd && convidados <= auditorioColorado.capacidade) {
						auditorioAdequado = convidados <= auditorioLaranja.capacidade ? auditorioLaranja : auditorioColorado;
						cadeirasAdd = convidados > auditorioLaranja.capacidade ? convidados - auditorioLaranja.capacidade : 0;

						alert("O auditório " + auditorioAdequado.nome + " é o mais adequado para o evento com " + convidados + " convidados.\n" +
							"Serão necessárias " + cadeirasAdd + " cadeiras adicionais.");

						var diaSemana = prompt("Informe o dia da semana do evento (\n segunda \n terca \n quarta \n quinta \n sexta \n sabado \n domingo").toLowerCase()

						var hr = parseInt(prompt("Informe a hora do evento: "))

						if (hr < 0 || hr > 23) {
							alert("Hora inválida. Por favor, informe um horário entre 0 e 23 horas.");
							eventos();
						}

						var hrDisponivel = false

						if (diaSemana == "segunda" || diaSemana == "terca" || diaSemana == "quarta" || diaSemana == "quinta" || diaSemana == "sexta") {
							if (hr >= 7 && hr <= 23) {
								hrDisponivel = true
							}
						} else if (diaSemana == "sabado") {
							if (hr >= 7 && hr <= 15) {
								hrDisponivel = true
							}
						} else if (diaSemana == "domingo") {
							if (hr >= 7 && hr <= 15) {
								hrDisponivel = true
							}
						}

						if (hrDisponivel) {
							var empresa = prompt("Informe o nome da empresa: ")
							alert("Auditoria reservado para empresa " + empresa + ": " + diaSemana + " as " + hr + " horas.")



							var numGarcons = Math.ceil(convidados / 12);
							/*numGarcons += Math.ceil(duracao / 2) * convidados / 12;*/
							var custoTotalGarcons =  (numGarcons* 10.5)*duracao
							/*var custoTotal = custoAgua + custoCafe + custoSalgados + custoTotalGarcons;*/// + custoTotalGarcons;


							alert("Serão necessários " + numGarcons + " garçons para o evento, totalizando um custo de R$" + custoTotalGarcons.toFixed(2) + " para o hotel.");
						} else {
							alert("O auditório não está disponível neste horário.");
							eventos();
						}


					} else {
						alert("Não há auditório adequado para o evento.");
						eventos();
					}



					var agua = 0.5 * convidados;
					var cafe = 0.2 * convidados;
					var salgados = 7 * convidados;

					var custoAgua = 0.4 * agua;
					var custoCafe = 0.8 * cafe;
					var custoSalgados = 34 * salgados;

					var custoTotal = custoAgua + custoCafe + custoSalgados;

					alert("O evento precisara de " + agua.toFixed(2) + " litros de aguá, " + cafe.toFixed(2) + " litros de café, e " + salgados + " salgados.")

					alert("Custo total com comida: R$" + custoTotal.toFixed(2));

					alert("Evento no " + auditorioAdequado.nome + ".\n" +
						"Nome da Empresa: " + empresa + ".\n" +
						"Data: " + diaSemana + ", " + hr + "h às " + (hr + duracao) + "h.\n" +
						"Duração do evento: " + duracao + "h.\n" +
						"Quantidade de garçons: " + numGarcons + ".\n" +
						"Quantidade de Convidados: " + convidados + "\n\n" +
						"Custo dos garçons: R$" + custoTotalGarcons.toFixed(2) + "\n" +
						"Custo do Buffet: R$" + custoTotal.toFixed(2) + "\n\n" +
						"Valor total do Evento: R$ " + custoTotal.toFixed(2));
				}

				var resposta = prompt("Gostaria de efetuar a reserva? S/N").toLowerCase();

				if (resposta === "s") {
					alert("Reserva efetuada com sucesso.");
				} else if (resposta === "n") {
					alert("Reserva não efetuada.");
				} else {
					alert("Resposta inválida. Por favor, responda S para sim ou N para não.");
					resposta = prompt("Gostaria de efetuar a reserva? S/N").toLowerCase();
				}

			}

			inicio()
}

function arpuro(){

    var empresa = prompt("Qual o nome da empresa?")
    var valoraparelho = parseInt(prompt("Qual o valor por aparelho?"))
    var qntdaparelhos = parseInt(prompt("Qual a quantidade de aparelhos?"))
    var desconto = parseInt(prompt("Qual a porcentagem de desconto?"))
    var qntminima = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"))

    var custototal = valoraparelho * qntdaparelhos

    if(qntdaparelhos >= qntminima){
      custototal = custototal - (custototal*(desconto/100))
    }
    alert("O serviço para a empresa " + empresa + " custará R$" + custototal)

    var confirmar = prompt("Deseja continuar? (s/n)");
      if (confirmar === "s") {
        arpuro()
    }else{
        inicio()
    }

}


function erro() {

    alert('Por favor, selecione uma opção válida');
    inicio();
}


function sair() {

    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert("Muito obrigado e até logo, " + usuario)
        window.close();
    } else {
        inicio();
    }
}



usuario();