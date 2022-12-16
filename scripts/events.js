window.addEventListener("load", () => {
    if(document.getElementById("events") != null)
    {
        jQuery.ajax({
            url: "https://mtgfranceorg-apimgt.azure-api.net/GetNextMeetupEvents",
            success: function( result ) {

                var html = "";

                result.forEach(event => 
                { 
                    html += "<div class='container'><div class='row'>";
                    
                    //For test purpose
                    //html += "<div>Communauté : "+JSON.stringify(event)+"</div>";

                    //Col 1 -> image
                    html += "<div class='col-md-4'><div><a href='"+event.url+"'><img width='100%' src='"+event.eventImgUri+"'/></a></div></div>";

                    //Col 2 -> infos
                    html += "<div class='col-md-8'>";
                    
                    html += "<div><span class='event-title'><a href='"+event.url+"'>"+event.title+"</a></span></div>";
                    html += "<div>Proposé par : <span>"+event.community+"</span></div>";
                    html += "<div><i class='fa-solid fa-calendar-days'></i> "+new Date(event.eventDate).toLocaleDateString()+"</div>";
                    if(event.eventLocation != null)
                    {
                        html += "<div><i class='fa-solid fa-location-dot'></i>  "
                            + "<a href='https://www.google.com/maps/place/"+event.eventLocation+"' target='blank'>"
                                + event.eventLocation
                            + "</a></div>";
                    }
                    else
                    {
                        html += "<div><i class='fa-brands fa-youtube'></i> Online</div>";
                    }

                    html += "<div><a class='btn btn-primary' href='"+event.url+"ical/"+event.title.replace(/\s/g, '')+".ics'>Save the date (ical)</a></div>";

                    html += "</div>";

                    html += "</div></div><hr/>";
                });


                jQuery("#next-events").html(html);
            }
        })
    }
  });