window.addEventListener("load", () => {
    if(document.getElementById("events") != null)
    {
        jQuery.ajax({
            url: "https://communities-events.azurewebsites.net/api/GetNextMeetupEvents?code=q4nYZ5Ehr84QXgzo3ypZO8c4c8rwZ2obLjvP4tCWqNyuAzFuVCACYA==",
            success: function( result ) {
                result.forEach(event => 
                { 
                    var html = "<div class='container'><div class='row'>";
                    
                    //For test purpose
                    //html += "<div>Communauté : "+JSON.stringify(event)+"</div>";

                    //Col 1 -> image
                    html += "<div class='col-md-4'><div><a href='"+event.url+"'><img width='100%' src='"+event.eventImgUri+"'/></a></div></div>";

                    //Col 2 -> infos
                    html += "<div class='col-md-8'>";
                    html += "<table>";
                    html += "<div>Titre : <span class='event-title'><a href='"+event.url+"'>"+event.title+"</a></span></div>";
                    html += "<div>Proposé par : <span>"+event.community+"</span></div>";
                    html += "<div>Date : "+new Date(event.eventDate).toLocaleDateString()+"</div>";
                    if(event.eventLocation != null)
                    {
                        html += "<div>Lieu : "+event.eventLocation+"</div>";
                    }

                    html += "</table>";
                    html += "</div>";

                    html += "</div></div><hr/>";


                    jQuery("#next-events").append(html);
            });
            }
        })
    }
  });