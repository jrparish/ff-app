import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RankingsComponent } from './components/rankings/rankings.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [RankingsComponent]
})
class AppModule { }

export default AppModule;
