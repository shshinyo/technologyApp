import{voterService} from './eventsdata/eventdetail/sessionlist/voterservice';
import{Isession}from './shared/eventmodel';
import{Observable, of} from 'rxjs';


describe("addvoter",()=>{
   let voterservice:voterService;
   let mockHttp;
   beforeEach(()=>{
       mockHttp=jasmine.createSpyObj('mockHttp',['delete','post'])
   })
   voterservice=new voterService(mockHttp)
    it('itshould remove a voter',()=>{
        var session ={id:5,voters:["jhon","joe"]};
        mockHttp.delete.and.returnValue(of(false))
        voterservice.deletevoter(3,<Isession>session,'joe')
    })
   
})

