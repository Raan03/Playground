namespace Uno.Simple.Objects
{
    using Uno.Simple.Enums;

    public class PlayerTurn
    {
        public Card Card { get; set; }
        public CardColor DeclaredColor { get; set; }
        public TurnResult Result { get; set; }
    }
}