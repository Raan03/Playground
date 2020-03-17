namespace Uno.Business
{
    using System.Collections.Generic;
    using Uno.Shared;

    public class GameManager
    {
        public List<Player> Players { get; set; }
        public CardDeck DrawPile { get; set; }
        public List<Card> DiscardPile { get; set; }
    }
}