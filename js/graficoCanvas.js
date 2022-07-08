export function graficoHeroe(heroe) {
    let chart = new CanvasJS.Chart("chartContainer", {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: `Estadísticas de Poder para ${heroe.name}`
        
      },
      legend: {
        cursor: "pointer",
        itemclick: explodePie
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "{name}: <strong>{y}</strong>",
        indexLabel: "{name}  ({y})",
        dataPoints: [
          { y: heroe.powerstats.intelligence, name: "Inteligencia", exploded: true },
          { y: heroe.powerstats.strength, name: "Fuerza" },
          { y: heroe.powerstats.speed, name: "Velocidad" },
          { y: heroe.powerstats.durability, name: "Durabilidad" },
          { y: heroe.powerstats.power, name: "Energía" },
          { y: heroe.powerstats.combat, name: "Combate" }       
        ]
      }]
    });
    chart.render();
  }
  
  function explodePie(e) {
    if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
      e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    } else {
      e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    }
    e.chart.render();
  }