# Abertura de formulário
## Solicitação de novo produto
- Cliente
- Tipo de solicitação
  - Novo produto
    - Dados do formulário
      - Limpo
      - Pré-preenchido
        - Dados de pré-preenchimento
  - Alteração de produto
    - Produto
## Solicitação de pedido
- ...

- Entender bem o papel de pedidos para os status serem adequados.
- Entender as aprovações, ordem entre cliente e bandeira, se podem ser simultâneos ou não. **Aprovação da bandeira é depois do cliente.**
- Como é recebida a informação de cor metálica? O que é escrito sobre ela?
- FAPs mudam de número para submissão de diferentes BINs? Por que? **v**
- BINs podem ser juntados em uma mesma FAP em quais condições? PF e PJ são tratados em uma mesma FAP? **É um critério interno.**
- Referência de cor. **Referência física**

# Cliente
| DADO               | SPR | SPV | JULIA |
|--------------------|-----|-----|-------|
| Cliente            | O   | X   | X     |
| CNPJ               |     | X   | X     |
| Contato            |     | X   | X     |
| Contato / Telefone |     | X   | X     |
| Contato / E-mail   |     | X   | X     |
| Emissor            |     | X   | X     |
| Sub-emissor        |     | X   | X     |

# Produto / geral (fora do accordion provavelmente)
| DADO               | SPR | SPV | JULIA | DÚVIDAS |
|--------------------|-----|-----|-------|---------|
| Nome               | O   |     | X     |         |
| Código do produto  | OA  |     |       |         |
| Versão do produto  | OA  |     |       |         |
| Família contábil   | O   |     |       |         |
| Tipo               | -   |     | X     | Família contábil já diz qual é o tipo de produto. |
| Quantidade         |     | X   | X     |         |

# Produto / lâmina
| DADO                 | SPR | SPV | JULIA | DÚVIDAS |
|----------------------|-----|-----|-------|---------|
| Material da lâmina   | O   |     | X     |         |
| > Cor                | O   |     | X     | Apenas PVC e hololam variam cor. |
| > Tamanho            | -   |     |       | Só usam o CR-80. Não há planos de expansão. |
| > Espessura          | -   |     | X     | Não é relevante, é apenas resultado. Para produtos atuais é padrão. Para casos específicos sem interfaces ou coisas similares, podem ter indicações. Expessura mín. 0,7mm (ISO) / máx. 0,85mm (limitação maquinário). |
| Laminação            | O   |     | X     | Todos são laminações, brilho, fosco e ultra-fosco. |
| Acabamento especial  | O   |     | ?     | Único corte especial que existe atualmente é para deficiência visual. Tinta perolisada é uma expressão para cores metálicas que estão no Pantone e demais escalas de cor. Em tese, existe apenas verniz localizado e corte especial. |
| > Verniz localizado  | O   |     |       |         |
| > Corte especial     | O   |     |       | Para deficiencia visual. |

# Produto / interfaces
| DADO                 | SPR | SPV | JULIA | DÚVIDAS |
|----------------------|-----|-----|-------|---------|
| Chip                 | X   |     | X     |         |
| > Cor                | X   |     | X     |         |
| > Forma física       | X   |     | X     | **???** **Do que se trata? (Inserido pela Júlia)** |
| > Tecnologia         | X   |     |       |         |
| > Modelo             | X   |     |       |         |
| > Capacidade         | X   |     |       |         |
| > Inicialização      | X   |     | X     | **???** **Para que é utilizado?** |
| Tarja                | X   |     | X     |         |
| > Tamanho            | X   |     | X     | 2 trilhas (8,4), 3 trilhas (12,7), sangrada (infinita). |
| > Cor                | X   |     | X     | Ver no material do Aumir. |
| >> Outra cor         | X   |     |       |         |
| Antena               | X   |     | X     |         |
| > Tecnologia         | X   |     | X     | Dual tem 4 modelos, não é selecionado pelo cliente. P24 e P25 usam antenas específicas. Um modelo usa para maioria dos clientes, mais ou menos 95% (AI&P). Mifare/Cipurse (Contactless) tem diversas variações, são as que estão no checklist. O que importa é o chip, verificar a variedade. |

# Produto / bandeira
| DADO                            | SPR | SPV | JULIA | DÚVIDAS |
|---------------------------------|-----|-----|-------|---------|
| Bandeira                        | X   |     | X     |         |
| > ICA                           | X   |     | X     | Só Mastercard. (Não precisa ter, não é mais gravado no cartão) |
| > PIF (Visa pré-pago)           | X   |     | X     |         |
| > RPP (Mastercard pré-pago)     | X   |     | X     |         |
| > BINs                          | X   |     | X     | É interessante ter uma descrição do BIN em caso de múltiplos, pois pode variar entre PF e PJ (dentro de um mesmo produto). |
| >> Opção BIN em desenvolvimento | X   |     |       | Melhor que a informação seja explícita de que está em desenvolvimento. |
| Holograma                       | X   |     | X     |         |
| > Modelo                        | X   |     | X     |         |
| > Cor                           | X   |     | X     | Cor é parte do modelo. |
| Painel de assinatura            | X   |     | X     | Ver documentação do Aumir. |
| > Modelo                        | X   |     | X     |         |
| Variance letter                 | X   |     | X     |         |
| > Número                        | X   |     | X     |         |
| Digital first                   | X   |     | X     | Precisa passar o número do digital first, para submissão para bandeira via FAP. |
| > Número                        | X   |     | X     |         |

# Produto / arte
| DADO                         | SPR | SPV | JULIA | DÚVIDAS |
|------------------------------|-----|-----|-------|---------|
| Anexos                       | X   |     | X     |         |
| Cores                        | X   |     | X     | Existe retorno em casos de incompatibilidade da cor especificada em arte. |
| Possui referência de cor     | X   |     | X     | **???** **Como é o processo da passagem dessa referência? Do que ela se trata? Algo físico?** |

# **???**
| DADO                         | SPR | SPV | JULIA | DÚVIDAS |
|------------------------------|-----|-----|-------|---------|
| Simulação de dados variáveis | X   |     | X     | Submetido para bandeira. Para clientes maiores tendem a ignorar a presença, para menores há mais exigência. Ideal manter um padrão de tratamento e sempre informar. |
| > Termo/DoD frente           | X   |     | X     |         |
| > Termo/DoD verso            | X   |     | X     |         |
| > Embossing                  | X   |     | X     |         |
| > Indenting                  | X   |     | X     |         |
| Regras de contrato           | X   |     | X     | Possui apenas valor para personalização. |
| > Exclusivo Durable          | X   |     | X     |         |
| > Exclusivo DoD              | X   |     | X     |         |

# FAP digital
| DADO                        | SPR | SPV | JULIA | DÚVIDAS |
|-----------------------------|-----|-----|-------|---------|
| Anexo                       | X   |     | X     |         |
| Revisão                     | A   |     |       |         |
| Status (aprovado/reprovado) | X   |     |       |         |