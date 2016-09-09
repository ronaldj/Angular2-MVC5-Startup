import { Routes, RouterModule } from '@angular/router';
import { SearchRoutes } from './search.routes';

export const routes: Routes = [
    ...SearchRoutes
];

export const DocumentInquiryRouting = RouterModule.forRoot(routes);