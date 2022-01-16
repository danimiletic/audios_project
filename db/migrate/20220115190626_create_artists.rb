class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :album
      t.string :image
      t.datetime :active
      t.belongs_to :platform, null: false, foreign_key: true

      t.timestamps
    end
  end
end
