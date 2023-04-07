function calcular() {

    // Declaração de variáveis
    let correnteNominal = parseFloat(document.getElementById("corrente-nominal").value);
    let numCondutores = parseFloat(document.getElementById("num-condutores").value);
    let numCircuitos = parseFloat(document.getElementById("num-circuitos").value);
    let temperaturaAmbiente = parseFloat(document.getElementById("temperatura-ambiente").value);
    let metodoInstalacao = parseFloat(document.getElementById("metodo-instalacao").value);
    let fatorAgrupamento;
    let fatorTemperatura;
    let fatorSegurancaPorcentagem = parseFloat(document.getElementById("fator-seguranca").value);
    let fatorSeguranca = fatorSegurancaPorcentagem / 100 + 1;
    let bitolaCabo;
    let correnteFinal = correnteNominal * fatorSeguranca;
    let formaDeIsolacao = parseFloat(document.getElementById("forma-isolacao").value);
    let correnteMaximaAdmitida;
    //document.getElementById("fator-segurança-view").value = fatorSeguranca.toString();//


    // Aqui define o Fator Agrupamento de acordo com o número de circuitos:

    if (numCircuitos == 1) {
        fatorAgrupamento = 1;
    } else if (numCircuitos == 2) {
        fatorAgrupamento = 0.80;
    } else if (numCircuitos == 3) {
        fatorAgrupamento = 0.70;
    } else if (numCircuitos == 4) {
        fatorAgrupamento = 0.65;
    } else if (numCircuitos == 5) {
        fatorAgrupamento = 0.60;
    } else if (numCircuitos == 6) {
        fatorAgrupamento = 0.57;
    } else if (numCircuitos == 7) {
        fatorAgrupamento = 0.54;
    } else if (numCircuitos == 8) {
        fatorAgrupamento = 0.52;
    } else if (numCircuitos >= 9 && numCircuitos <= 11) {
        fatorAgrupamento = 0.50;
    } else if (numCircuitos >= 12 && numCircuitos <= 15) {
        fatorAgrupamento = 0.45;
    } else if (numCircuitos >= 16 && numCircuitos <= 19) {
        fatorAgrupamento = 0.41;
    } else if (numCircuitos >= 20) {
        fatorAgrupamento = 0.38;
    }

    // Aqui define o Fator Temperatura de acordo com a temperatura ambiente:

    document.getElementById("fator-agrupamento").value = fatorAgrupamento;

    if (temperaturaAmbiente == 10) {
        fatorTemperatura = 1.15;
    } else if (temperaturaAmbiente == 15) {
        fatorTemperatura = 1.12;
    } else if (temperaturaAmbiente == 20) {
        fatorTemperatura = 1.08;
    } else if (temperaturaAmbiente == 25) {
        fatorTemperatura = 1.04;
    } else if (temperaturaAmbiente == 30) {
        fatorTemperatura = 1.00;
    } else if (temperaturaAmbiente == 35) {
        fatorTemperatura = 0.96;
    } else if (temperaturaAmbiente == 40) {
        fatorTemperatura = 0.91;
    } else if (temperaturaAmbiente == 45) {
        fatorTemperatura = 0.87;
    } else if (temperaturaAmbiente == 50) {
        fatorTemperatura = 0.82;
    } else if (temperaturaAmbiente == 55) {
        fatorTemperatura = 0.76;
    } else if (temperaturaAmbiente == 60) {
        fatorTemperatura = 0.71;
    } else if (temperaturaAmbiente == 65) {
        fatorTemperatura = 0.65;
    } else if (temperaturaAmbiente == 70) {
        fatorTemperatura = 0.58;
    } else if (temperaturaAmbiente == 75) {
        fatorTemperatura = 0.50;
    } else if (temperaturaAmbiente == 80) {
        fatorTemperatura = 0.41;
    }

    document.getElementById("fator-temperatura").value = fatorTemperatura;

    // Abaixo as tabelas são do cabo PVC
    // Tabela para os métodos A1 - PVC
    let tabelaCorrentes2CondA1PVC = [7, 9, 11, 14.5, 19.5, 26, 34, 46, 61, 80, 99, 119, 151, 182, 210, 240, 273, 321, 367, 438, 502, 578, 669, 767];
    let tabelaCorrentes3CondA1PVC = [7, 9, 10, 13.5, 18, 24, 31, 42, 56, 73, 89, 108, 136, 164, 188, 216, 245, 286, 328, 390, 447, 514, 593, 679];

    // Tabela para os métodos A2 - PVC
    let tabelaCorrentes2CondA2PVC = [7, 9, 11, 14, 18.5, 25, 32, 43, 57, 75, 92, 110, 139, 167, 192, 219, 248, 291, 334, 398, 456, 526, 609, 698];
    let tabelaCorrentes3CondA2PVC = [7, 9, 10, 13, 17.5, 23, 29, 39, 52, 68, 83, 99, 125, 150, 172, 196, 223, 261, 298, 355, 406, 467, 540, 618];

    // Tabela para os métodos B1 - PVC
    let tabelaCorrentes2CondB1PVC = [9, 11, 14, 17.5, 24, 32, 41, 57, 76, 101, 125, 151, 192, 232, 269, 309, 353, 415, 477, 571, 656, 758, 881, 1012];
    let tabelaCorrentes3CondB1PVC = [8, 10, 12, 15.5, 21, 28, 36, 50, 68, 89, 110, 134, 171, 207, 239, 275, 314, 370, 426, 510, 587, 678, 788, 906];

    // Tabela para os métodos B2 - PVC
    let tabelaCorrentes2CondB2PVC = [9, 11, 13, 16.5, 23, 30, 38, 52, 69, 90, 111, 133, 168, 201, 232, 265, 300, 351, 401, 477, 545, 626, 723, 827];
    let tabelaCorrentes3CondB2PVC = [8, 10, 12, 15, 20, 27, 34, 46, 62, 80, 99, 118, 149, 179, 206, 236, 268, 313, 358, 425, 486, 559, 645, 738];

    // Tabela para os métodos C - PVC
    let tabelaCorrentes2CondCPVC = [10, 13, 15, 19.5, 27, 36, 46, 63, 85, 112, 138, 168, 213, 258, 299, 344, 392, 461, 530, 634, 729, 843, 978, 1125];
    let tabelaCorrentes3CondCPVC = [9, 11, 14, 17.5, 24, 32, 41, 57, 76, 96, 119, 144, 184, 223, 259, 299, 341, 403, 464, 557, 642, 743, 865, 996];

    // Tabela para os métodos D - PVC
    let tabelaCorrentes2CondDPVC = [12, 15, 18, 22, 29, 38, 47, 63, 81, 104, 125, 148, 183, 216, 246, 278, 312, 361, 408, 478, 540, 614, 700, 792];
    let tabelaCorrentes3CondDPVC = [10, 12, 15, 18, 24, 31, 39, 52, 67, 86, 103, 122, 151, 179, 203, 230, 258, 297, 336, 394, 445, 506, 577, 652];

    // Abaixo as tabelas são do cabo XLPE/EPR
    // Tabela para os métodos A1
    let tabelaCorrentes2CondA1 = [10, 12, 15, 19, 26, 35, 45, 61, 81, 106, 131, 158, 200, 241, 278, 318, 362, 424, 486, 579, 664, 765, 885, 1014];
    let tabelaCorrentes3CondA1 = [9, 11, 13, 17, 23, 31, 40, 54, 73, 95, 117, 141, 179, 216, 249, 285, 324, 380, 435, 519, 595, 685, 792, 908];

    // Tabela para os métodos A2
    let tabelaCorrentes2CondA2 = [10, 12, 14, 18.5, 25, 33, 42, 57, 76, 99, 121, 145, 183, 220, 253, 290, 329, 386, 442, 527, 604, 696, 805, 923];
    let tabelaCorrentes3CondA2 = [9, 11, 13, 16.5, 22, 30, 38, 51, 68, 89, 109, 130, 164, 197, 227, 259, 295, 346, 396, 472, 541, 623, 721, 826];

    // Tabela para os métodos B1:
    let tabelaCorrentes2CondB1 = [12, 15, 18, 23, 31, 42, 54, 75, 100, 133, 164, 198, 253, 306, 354, 407, 464, 546, 628, 751, 864, 998, 1158, 1332];
    let tabelaCorrentes3CondB1 = [10, 13, 16, 20, 28, 37, 48, 66, 88, 117, 144, 175, 222, 269, 312, 358, 408, 481, 553, 661, 760, 879, 1020, 1173];

    // Tabela para os métodos B1:

    let tabelaCorrentes2CondB2 = [11, 15, 17, 22, 30, 40, 51, 69, 91, 119, 146, 175, 221, 265, 305, 349, 395, 462, 529, 628, 718, 825, 952, 1088];
    let tabelaCorrentes3CondB2 = [10, 13, 15, 19.5, 26, 35, 44, 60, 80, 105, 128, 154, 194, 233, 268, 307, 348, 407, 465, 552, 631, 725, 837, 957];

    // Tabela para os métodos C:

    let tabelaCorrentes2CondC = [12, 16, 19, 24, 33, 45, 58, 80, 107, 138, 171, 209, 269, 328, 382, 441, 506, 599, 693, 835, 966, 1122, 1311, 1515];
    let tabelaCorrentes3CondC = [11, 14, 17, 22, 30, 40, 52, 71, 96, 119, 147, 179, 229, 278, 322, 371, 424, 500, 576, 692, 797, 923, 1074, 1237];

    // Tabela para os métodos D:

    let tabelaCorrentes2CondD = [14, 18, 21, 26, 34, 44, 56, 73, 95, 121, 146, 173, 213, 252, 287, 324, 363, 419, 474, 555, 627, 711, 811, 916];
    let tabelaCorrentes3CondD = [12, 15, 17, 22, 29, 37, 46, 61, 79, 101, 122, 144, 178, 211, 240, 271, 304, 351, 396, 464, 525, 596, 679, 767];

    // Cálculo abaixo para Isolação XLPE/EPR:

    // Cálculo para método A1, 2 condutores:

    if (metodoInstalacao == 1 && numCondutores == 2 && formaDeIsolacao == 1) {

        if (correnteFinal <= tabelaCorrentes2CondA1[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método A1, 3 condutores:

    else if (metodoInstalacao == 1 && numCondutores == 3 && formaDeIsolacao == 1) {

        if (correnteFinal <= tabelaCorrentes3CondA1[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método A2, 2 condutores:

    else if (metodoInstalacao == 2 && numCondutores == 2 && formaDeIsolacao == 1) {

        if (correnteFinal <= tabelaCorrentes2CondA2[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método A2, 3 condutores:

    else if (metodoInstalacao == 2 && numCondutores == 3 && formaDeIsolacao == 1) {

        if (correnteFinal <= tabelaCorrentes3CondA2[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método B1, 2 condutores:

    else if (metodoInstalacao == 3 && numCondutores == 2 && formaDeIsolacao == 1) {

        if (correnteFinal <= tabelaCorrentes2CondB1[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método B1, 3 condutores:

    else if (metodoInstalacao == 3 && numCondutores == 3 && formaDeIsolacao == 1) {

        if (correnteFinal <= tabelaCorrentes3CondB1[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método B2, 2 condutores:

    else if (metodoInstalacao == 4 && numCondutores == 2 && formaDeIsolacao == 1) {

        if (correnteFinal <= tabelaCorrentes2CondB2[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método B2, 3 condutores:

    else if (metodoInstalacao == 4 && numCondutores == 3 && formaDeIsolacao == 1) {

        if (correnteFinal <= tabelaCorrentes3CondB2[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método C, 2 condutores:

    else if (metodoInstalacao == 5 && numCondutores == 2 && formaDeIsolacao == 1) {

        if (correnteFinal <= tabelaCorrentes2CondC[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondC[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes2CondC[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método D, 3 condutores:

    else if (metodoInstalacao == 5 && numCondutores == 3 && formaDeIsolacao == 1) {

        if (correnteFinal <= tabelaCorrentes3CondC[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondC[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes3CondC[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método D, 2 condutores:

    else if (metodoInstalacao == 6 && numCondutores == 2 && formaDeIsolacao == 1) {

        if (correnteFinal <= tabelaCorrentes2CondD[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida =  tabelaCorrentes2CondD[0]* fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondD[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes2CondD[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método D, 3 condutores:

    else if (metodoInstalacao == 6 && numCondutores == 3 && formaDeIsolacao == 1) {

        if (correnteFinal <= tabelaCorrentes3CondD[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondD[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes3CondD[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }





    // Abaixo é PVC

    // Cálculo para método A1, 2 condutores:

    else if (metodoInstalacao == 1 && numCondutores == 2 && formaDeIsolacao == 2) {

        if (correnteFinal <= tabelaCorrentes2CondA1PVC[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA1PVC[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes2CondA1PVC[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método A1, 3 condutores:

    else if (metodoInstalacao == 1 && numCondutores == 3 && formaDeIsolacao == 2) {

        if (correnteFinal <= tabelaCorrentes3CondA1PVC[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[4] * fatorAgrupamento * fatorTemperatur;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA1PVC[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes3CondA1PVC[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método A2, 2 condutores:

    else if (metodoInstalacao == 2 && numCondutores == 2 && formaDeIsolacao == 2) {

        if (correnteFinal <= tabelaCorrentes2CondA2PVC[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondA2PVC[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes2CondA2PVC[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método A2, 3 condutores:

    else if (metodoInstalacao == 2 && numCondutores == 3 && formaDeIsolacao == 2) {

        if (correnteFinal <= tabelaCorrentes3CondA2PVC[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondA2PVC[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes3CondA2PVC[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método B1, 2 condutores:

    else if (metodoInstalacao == 3 && numCondutores == 2 && formaDeIsolacao == 2) {

        if (correnteFinal <= tabelaCorrentes2CondB1PVC[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB1PVC[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes2CondB1PVC[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método B1, 3 condutores:

    else if (metodoInstalacao == 3 && numCondutores == 3 && formaDeIsolacao == 2) {

        if (correnteFinal <= tabelaCorrentes3CondB1[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB1PVC[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes3CondB1PVC[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método B2, 2 condutores:

    else if (metodoInstalacao == 4 && numCondutores == 2 && formaDeIsolacao == 2) {

        if (correnteFinal <= tabelaCorrentes2CondB2PVC[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondB2PVC[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes2CondB2PVC[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método B2, 3 condutores:

    else if (metodoInstalacao == 4 && numCondutores == 3 && formaDeIsolacao == 2) {

        if (correnteFinal <= tabelaCorrentes3CondB2PVC[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondB2PVC[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes3CondB2PVC[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método C, 2 condutores:

    else if (metodoInstalacao == 5 && numCondutores == 2 && formaDeIsolacao == 2) {

        if (correnteFinal <= tabelaCorrentes2CondCPVC[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondCPVC[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes2CondCPVC[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método C, 3 condutores:

    else if (metodoInstalacao == 5 && numCondutores == 3 && formaDeIsolacao == 2) {

        if (correnteFinal <= tabelaCorrentes3CondCPVC[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondCPVC[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes3CondCPVC[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método D, 2 condutores:

    else if (metodoInstalacao == 6 && numCondutores == 2 && formaDeIsolacao == 2) {

        if (correnteFinal <= tabelaCorrentes2CondDPVC[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes2CondDPVC[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes2CondDPVC[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    // Cálculo para método D, 3 condutores:

    else if (metodoInstalacao == 6 && numCondutores == 3 && formaDeIsolacao == 2) {

        if (correnteFinal <= tabelaCorrentes3CondDPVC[0] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[0] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[1] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 0.75;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[1] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[2] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[2] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[3] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[3] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[4] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 2.5;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[4] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[5] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 4;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[5] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[6] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 6;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[6] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[7] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 10;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[7] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[8] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 16;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[8] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[9] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 25;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[9] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[10] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 35;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[10] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[11] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 50;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[11] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[12] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 70;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[12] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[13] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 95;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[13] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[14] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 120;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[14] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[15] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 150;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[15] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[16] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 185;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[16] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[17] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 240;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[17] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[18] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 300;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[18] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[19] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 400;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[19] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[20] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 500;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[20] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[21] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 630;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[21] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[22] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 800;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[22] * fatorAgrupamento * fatorTemperatura;
        } else if (correnteFinal <= tabelaCorrentes3CondDPVC[23] * fatorAgrupamento * fatorTemperatura) {
            bitolaCabo = 1000;
            correnteMaximaAdmitida = tabelaCorrentes3CondDPVC[23] * fatorAgrupamento * fatorTemperatura;
        } else {
            alert("Corrente inválida");
        }
    }

    else {
        alert("Erro em algum dos dados");
        return;
    }
    // Exibe a bitola calculada na tela
    document.getElementById("bitola-cabo").value = bitolaCabo;
    // Exibe a corrente máxima admitida na tela
    document.getElementById("corrente-maxima-admitida").value = correnteMaximaAdmitida.toFixed(2);
    // Exibe a corrente final corrigida com a margem na tela
    document.getElementById("corrente-com-margem").value = correnteFinal.toFixed(2);
}

function gerarRelatorio(){
    let correnteNominalPDF = document.getElementById("corrente-nominal").value;
    let margemSegurançaPDF = document.getElementById("fator-seguranca").value;
    let formaIsolacaoPDF = document.getElementById("forma-isolacao").value;
    let numeroCondutoresPDF = document.getElementById("num-condutores").value;
    let numeroCircuitosPDF = document.getElementById("num-circuitos").value;
    let temperaturaAmbientePDF = document.getElementById("temperatura-ambiente").value;
    let metodoInstalacaoPDF = document.getElementById("metodo-instalacao").value;
    let bitolaCaboPDF = document.getElementById("bitola-cabo").value;
    let fatorTemperaturaPDF = document.getElementById("fator-temperatura").value;
    let fatorAgrupamentoPDF = document.getElementById("fator-agrupamento").value;
    let correnteASuportarPDF = document.getElementById("corrente-com-margem").value;
    let correnteMaximaPDF = document.getElementById("corrente-maxima-admitida").value;
    let nomeClientePDF = document.getElementById("nome-do-cliente").value;

    let doc = new jsPDF({    
        unit: 'mm',
        format: 'a4'
      });
    doc.setFontStyle("bold");
    doc.text("Nome do cliente:", 10, 10);
    doc.setFontStyle("normal");
    doc.text(nomeClientePDF, 10, 20);
    doc.setFontStyle("bold");
    doc.text("Corrente Nominal a ser suportada (A):", 10, 30);
    doc.setFontStyle("normal");
    doc.text(correnteNominalPDF, 10, 40);
    doc.setFontStyle("bold");
    doc.text("Margem de Segurança da Corrente (%):", 10, 50);
    doc.setFontStyle("normal");
    doc.text(margemSegurançaPDF, 10, 60);
    doc.setFontStyle("bold");
    doc.text("Forma de Isolação:", 10, 70);
    doc.setFontStyle("normal");
    doc.text(formaIsolacaoPDF, 10, 80);
    doc.setFontStyle("bold");
    doc.text("Número de Condutores Carregados:", 10, 90);
    doc.setFontStyle("normal");
    doc.text(numeroCondutoresPDF, 10, 100);
    doc.setFontStyle("bold");
    doc.text("Número de Circuitos Agrupados:", 10, 110);
    doc.setFontStyle("normal");
    doc.text(numeroCircuitosPDF, 10, 120);
    doc.setFontStyle("bold");
    doc.text("Temperatura ambiente:", 10, 130);
    doc.setFontStyle("normal");
    doc.text(temperaturaAmbientePDF, 10, 140);
    doc.setFontStyle("bold");
    doc.text("Método de Instalação:", 10, 150);
    doc.setFontStyle("normal");
    doc.text(metodoInstalacaoPDF, 10, 160);
    doc.setFontStyle("bold");
    doc.text("Bitola do Cabo (mm²):", 10, 170);
    doc.setFontStyle("normal");
    doc.text(bitolaCaboPDF, 10, 180);
    doc.setFontStyle("bold");
    doc.text("Fator de Temperatura:", 10, 190);
    doc.setFontStyle("normal");
    doc.text(fatorTemperaturaPDF, 10, 200);
    doc.setFontStyle("bold");
    doc.text("Fator de agrupamento:", 10, 210);
    doc.setFontStyle("normal");
    doc.text(fatorAgrupamentoPDF, 10, 220);
    doc.setFontStyle("bold");
    doc.text("Corrente a ser suportada com margem de segurança (A):", 10, 230);
    doc.setFontStyle("normal");
    doc.text(correnteASuportarPDF, 10, 240);
    doc.setFontStyle("bold");
    doc.text("Corrente máxima admitida do cabo especificado (A):", 10, 250);
    doc.setFontStyle("normal");
    doc.text(correnteMaximaPDF, 10, 260);
    doc.save('RelatórioCABOS-' + nomeClientePDF + '.pdf');
}
