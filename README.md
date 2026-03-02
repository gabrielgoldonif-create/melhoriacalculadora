# Melhoria  - Calculadora 

## Sobre o projeto

Calculadora simples desenvolvida com HTML, CSS e JavaScript.

O objetivo foi analisar e melhorar a performance usando Lighthouse no Chrome Devtools.

---

## Análise Inicial

Relatório gerado no Lighthouse (modo Mobile).

**Resultado inicial:**
- Performance: 97
- Script bloqueando renderização
- Código JavaScript duplicado
- Uso de onclick inline

Arquivo: `relatorio-antes.pdf`

---

## Melhorias Aplicadas

- Adição do atributo `defer` no script
- Mudou de `onclick` por `addEventListener`
- Refatoração do JavaScript para não ter repetição de código
- Redução de consultas  ao DOM
- Organização estrutural do código.

---

## Resultado Final

Novo relatório gerado após as melhorias.

**Resultado final:**
- Performance: 100

Arquivo: `relatorio-depois.pdf`

---

## Conclusão

As otimizações aplicadas melhoraram o resultado. Com em melhor desempenho e boas práticas de desenvolvimento.