import { UiMdModule } from './ui-md.module';

describe('UiMdModule', () => {
  let uiMdModule: UiMdModule;

  beforeEach(() => {
    uiMdModule = new UiMdModule();
  });

  it('should create an instance', () => {
    expect(uiMdModule).toBeTruthy();
  });
});
