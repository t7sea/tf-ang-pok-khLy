import { Component, computed, inject } from '@angular/core';
import { AppService } from '../../services/app-service';
import { Loader } from "../../components/loader/loader";
import { BaseChartDirective } from 'ng2-charts';
import { ChartData } from 'chart.js';

@Component({
  imports: [Loader, BaseChartDirective],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  appService = inject(AppService)

  barChartData = computed<ChartData>(() => ({
    labels: this.appService.pokemon.value()?.stats.map(s => s.stat.name),
    datasets: [{ 
      label: this.appService.pokemonName(), 
      data: this.appService.pokemon.value()?.stats.map(s => s.base_stat) ?? []
    }]
  }))
}
