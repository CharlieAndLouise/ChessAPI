import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-master-page',
  standalone: false,
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent {
  @ContentChild('banner', { read: TemplateRef }) bannerTemplate!: TemplateRef<any>;
  @ContentChild('leftNavigation', { read: TemplateRef }) leftNavigationTemplate!: TemplateRef<any>;
  @ContentChild('content', { read: TemplateRef }) contentTemplate!: TemplateRef<any>;
  @ContentChild('foot', { read: TemplateRef }) footTemplate!: TemplateRef<any>;
}