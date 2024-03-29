import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { AuthGuard } from './_guards/auth.guard';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '',
  runGuardsAndResolvers: 'always',
  canActivate: [AuthGuard],
  children: [
    {path: 'members', component: MemberListComponent},
    {path: 'members/:username', component: MemberDetailComponent},
    {path: 'lists', component: ListsComponent},
    {path: 'messages', component: MessagesComponent}
  ]
  },
  {path: 'errors', component: TestErrorComponent},
  {path: 'learnmore', component: LearnMoreComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
