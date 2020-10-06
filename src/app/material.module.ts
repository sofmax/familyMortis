import {NgModule} from '@angular/core';

import {MatButtonModule, 
        MatCardModule, 
        MatToolbarModule,
        MatSelectModule}  from '@angular/material'

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatSelectModule
      
    ],
    exports:[
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatSelectModule
       
    ]

})
export class MaterialModule {}