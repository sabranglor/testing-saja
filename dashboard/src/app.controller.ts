import { Get, Controller, Res } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  index(@Res() res): any {
    res.render('index');
  }

  @Get('/auth/login')
  login(@Res() res): any {
    res.render('login');
  }
}
