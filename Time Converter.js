const dt= new Date();

const startTime = '7:30'
const endTime = '14:30'

const giveUserTime = (hours,minuts) =>{
    let hour = hours<=12 ? hours : hours-12 ;
    let minut = minuts.length<2 ? '0'+minuts : minuts ;
    let prepend = hours >= 12 ? 'PM' : 'AM';
    let time = hour + ':' + minut + ' ' + prepend;
    return String(time);
}

const prepareList = (startTime,endTime,addingValue)=>{
    let timeList = [];
    let startHour='';
    let startMin='';
    let endHour='';
    let endMin='';
    let flag=0;
    for(let i in startTime){
        
        if(startTime[i] == ':'){
            flag = 1
        }
        if(flag==0 && startTime[i] != ':'){
            startHour=startHour+startTime[i];
        }else if(flag==1 && startTime[i] != ':'){
            startMin = startMin + startTime[i];
        }
    }
    flag=0;
    for(let i in endTime){
        if(endTime[i] == ':'){
            flag = 1
        }
        if(flag==0 && endTime[i] != ':'){
            endHour=endHour+endTime[i];
        }else if(flag==1 && endTime[i] != ':'){
            endMin = endMin + endTime[i];
        }
    }

    startHour = parseInt(startHour);
    startMin = parseInt(startMin);
    endHour = parseInt(endHour);
    endMin = parseInt(endMin);
    timeList.push(giveUserTime(startHour,String(startMin)));
    while(startHour<endHour){
        startMin = startMin + addingValue ;
        
        if(startMin>=60){
            startHour = startHour + 1;
            startMin=startMin - 60;
            timeList.push(giveUserTime(startHour,String(startMin)));
        }else {
            timeList.push(giveUserTime(startHour,String(startMin)));
        }
    }
    return timeList;
}

console.log(prepareList('9:30','17:20',30));
