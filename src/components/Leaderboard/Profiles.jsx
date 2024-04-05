export default function Profiles({ Leaderboard }) {
    return (
          <div id="profile">
              {Leaderboard.map((value, index) => (
                            <div className="flex" key={index}>
                                <div className="item">
                                    <img src={value.img} alt="" />
                    
                                    <div className="info">
                                        <h3 className='name text-white'>{value.name}</h3>    
                                    </div>                
                                </div>
                                <div className="item">
                                    <span>{value.score}</span>
                                </div>
                            </div>
                            )
                        )
                    
                
              }
          </div>
    )
  }