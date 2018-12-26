import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticdataService {
  info = ['Air quality is considered satisfactory, and air pollution poses little or no risk',
    'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.',
    'Members of sensitive groups may experience health effects. The general public is not likely to be affected.',
    'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects',
    'Health warnings of emergency conditions. The entire population is more likely to be affected.',
    'Health alert: everyone may experience more serious health effects'];
  precautions = ['None', 'Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.',
    'Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.',
    'Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion,',
    'Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.',
    'Everyone should avoid all outdoor exertion']
  apl = ['Good', 'Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous'];
  constructor() { }
}
